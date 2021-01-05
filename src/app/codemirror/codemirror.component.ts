import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output} from '@angular/core';
import {EditorView, keymap} from '@codemirror/next/view';
import {EditorState} from '@codemirror/next/state';
import {HighlightStyle, tags} from '@codemirror/next/highlight';
import {javascriptLanguage} from '@codemirror/next/lang-javascript';
import { oneDarkTheme} from '@codemirror/next/theme-one-dark';
import {indentOnInput} from '@codemirror/next/language';
import {defaultKeymap, indentLess, indentMore} from '@codemirror/next/commands';
import {autocompletion, completionKeymap} from '@codemirror/next/autocomplete';


const myStyle = HighlightStyle.define(
  {tag: tags.variableName, color: 'green'},
  {tag: tags.definition(tags.variableName), color: 'yellow'},
  {tag: tags.definitionKeyword, color: 'fuchsia'},
);


@Component({
  selector: 'app-codemirror',
  templateUrl: './codemirror.component.html',
  styleUrls: ['./codemirror.component.scss']
})
export class CodemirrorComponent implements OnInit, OnChanges {

  private codeMirrorView: EditorView | null = null;

  @Input()
  public value = '';

  @Output()
  public changed = new EventEmitter<string>();

  constructor(private element: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
    this.codeMirrorView = new EditorView({
      state: EditorState.create({
        doc: this.value,
        extensions: [
          // overrides first..
          oneDarkTheme,

          myStyle,
          javascriptLanguage,

          autocompletion(),
          keymap.of([
            ...defaultKeymap,
            ...completionKeymap,
            {
              key: 'Tab',
              preventDefault: true,
              run: indentMore,
            },
            {
              key: 'Shift-Tab',
              preventDefault: true,
              run: indentLess,
            },
          ]),

          indentOnInput(),
          // The basic setup needs to be at the end DUH
          // basicSetup,
          EditorState.changeFilter.of((tr) => {
            if (tr.docChanged) {
              this.value = tr.newDoc.toJSON().join('\n');

              this.changed.emit(this.value);
            }

            return true;
          })
        ]}),
      parent: this.element.nativeElement
    });


  }

  ngOnChanges({value}: SimpleChanges): void {
    if (value) {
      const currentEditorValue = this.codeMirrorView?.state.doc.toJSON().join('\n');

      if (currentEditorValue !== value.currentValue) {
        const transaction = this.codeMirrorView?.state.update({
          changes: {from: 0, to: this.codeMirrorView?.state.doc.length, insert: value.currentValue}
        });
        if (transaction) {
          this.codeMirrorView?.dispatch(transaction);
        }
      }
    }
  }

}
