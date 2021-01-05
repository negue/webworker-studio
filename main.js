(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/webworker-studio/webworker-studio/src/main.ts */"zUnb");


/***/ }),

/***/ "31fP":
/*!***************************************************!*\
  !*** ./src/app/worker-code/worker-code.module.ts ***!
  \***************************************************/
/*! exports provided: WorkerCodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerCodeModule", function() { return WorkerCodeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _worker_code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./worker-code.component */ "mJKc");
/* harmony import */ var _codemirror_codemirror_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../codemirror/codemirror.module */ "oC9w");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");







class WorkerCodeModule {
}
WorkerCodeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorkerCodeModule });
WorkerCodeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WorkerCodeModule_Factory(t) { return new (t || WorkerCodeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _codemirror_codemirror_module__WEBPACK_IMPORTED_MODULE_3__["CodemirrorModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkerCodeModule, { declarations: [_worker_code_component__WEBPACK_IMPORTED_MODULE_2__["WorkerCodeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _codemirror_codemirror_module__WEBPACK_IMPORTED_MODULE_3__["CodemirrorModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]], exports: [_worker_code_component__WEBPACK_IMPORTED_MODULE_2__["WorkerCodeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkerCodeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_worker_code_component__WEBPACK_IMPORTED_MODULE_2__["WorkerCodeComponent"]],
                exports: [
                    _worker_code_component__WEBPACK_IMPORTED_MODULE_2__["WorkerCodeComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _codemirror_codemirror_module__WEBPACK_IMPORTED_MODULE_3__["CodemirrorModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Ebwu":
/*!**********************************!*\
  !*** ./src/app/state.service.ts ***!
  \**********************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! localforage */ "oAJy");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _gewd_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gewd/utils */ "c7iY");






class StateService {
    constructor() {
        this.projects$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.initializeData();
    }
    addNewProject(name) {
        this.projects$.next([...this.projects$.getValue(), {
                id: Object(_gewd_utils__WEBPACK_IMPORTED_MODULE_4__["uuid"])(),
                name,
            }]);
        this.saveToLocalForage();
    }
    renameProject(id, newName) {
        const stateProject = this.projects$.value.find(p => p.id === id);
        if (stateProject) {
            stateProject.name = newName;
            this.saveToLocalForage();
        }
    }
    deleteProject(id) {
        const projects = this.projects$.value;
        const stateProjectIndex = projects.findIndex(p => p.id === id);
        if (stateProjectIndex !== -1) {
            projects.splice(stateProjectIndex, 1);
            this.projects$.next(projects);
            this.saveToLocalForage();
        }
    }
    getWorkerCode(projectId) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const projectForage = this.getProjectForage(projectId);
            yield projectForage.ready();
            return (_a = yield projectForage.getItem('worker_code')) !== null && _a !== void 0 ? _a : '';
        });
    }
    setWorkerCode(projectId, workerCode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const projectForage = this.getProjectForage(projectId);
            yield projectForage.ready();
            projectForage.setItem('worker_code', workerCode);
        });
    }
    getProjectForage(projectId) {
        return localforage__WEBPACK_IMPORTED_MODULE_2__["createInstance"]({
            name: `project/${projectId}`
        });
    }
    initializeData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield localforage__WEBPACK_IMPORTED_MODULE_2__["ready"]();
            const projects = yield localforage__WEBPACK_IMPORTED_MODULE_2__["getItem"]('projects');
            this.projects$.next(projects !== null && projects !== void 0 ? projects : []);
        });
    }
    saveToLocalForage() {
        localforage__WEBPACK_IMPORTED_MODULE_2__["setItem"]('projects', this.projects$.value);
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(); };
StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.service */ "Ebwu");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _worker_code_worker_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./worker-code/worker-code.component */ "mJKc");








function AppComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const project_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectProject(project_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", project_r2.id === (ctx_r0.selectedProject == null ? null : ctx_r0.selectedProject.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r2.name, " ");
} }
function AppComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.editProjectName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.deleteProject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-worker-code", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedProject.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projectId", ctx_r1.selectedProject.id);
} }
class AppComponent {
    constructor(state) {
        this.state = state;
        this.projects$ = this.state.projects$;
        this.selectedProject = null;
    }
    addNewProject() {
        var newName = prompt('New Project Name');
        if (newName) {
            this.state.addNewProject(newName);
        }
    }
    selectProject(project) {
        this.selectedProject = project;
    }
    editProjectName() {
        if (!this.selectedProject) {
            return;
        }
        const newName = prompt('New Projects Name: ');
        if (newName) {
            this.state.renameProject(this.selectedProject.id, newName);
        }
    }
    deleteProject() {
        if (!this.selectedProject) {
            return;
        }
        if (confirm('Do you want to delete this Project?')) {
            this.state.deleteProject(this.selectedProject.id);
            this.selectedProject = null;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 4, consts: [[1, "example-container"], ["mode", "side", "opened", ""], ["mat-icon-button", "", 3, "click"], ["mat-list-item", "", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "project-content", 4, "ngIf"], ["mat-list-item", "", 3, "click"], [1, "project-content"], ["mat-raised-button", "", 3, "click"], [3, "projectId"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-action-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.addNewProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_button_7_Template, 2, 3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_10_Template, 8, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx.projects$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedProject != null);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _worker_code_worker_code_component__WEBPACK_IMPORTED_MODULE_6__["WorkerCodeComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["mat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-drawer[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  font-weight: bold;\n}\n\n.selected[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.project-content[_ngcontent-%COMP%] {\n  margin: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUVFLFlBQUE7QUFBRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LWRyYXdlciB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuaDMge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnByb2plY3QtY29udGVudCB7XG5cbiAgbWFyZ2luOiAycmVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _codemirror_codemirror_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./codemirror/codemirror.module */ "oC9w");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _worker_code_worker_code_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./worker-code/worker-code.module */ "31fP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _codemirror_codemirror_module__WEBPACK_IMPORTED_MODULE_4__["CodemirrorModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _worker_code_worker_code_module__WEBPACK_IMPORTED_MODULE_9__["WorkerCodeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _codemirror_codemirror_module__WEBPACK_IMPORTED_MODULE_4__["CodemirrorModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _worker_code_worker_code_module__WEBPACK_IMPORTED_MODULE_9__["WorkerCodeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _codemirror_codemirror_module__WEBPACK_IMPORTED_MODULE_4__["CodemirrorModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                    _worker_code_worker_code_module__WEBPACK_IMPORTED_MODULE_9__["WorkerCodeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "mJKc":
/*!******************************************************!*\
  !*** ./src/app/worker-code/worker-code.component.ts ***!
  \******************************************************/
/*! exports provided: WorkerCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerCodeComponent", function() { return WorkerCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _gewd_utils_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gewd/utils/worker */ "4LVC");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state.service */ "Ebwu");
/* harmony import */ var _codemirror_codemirror_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../codemirror/codemirror.component */ "yjHL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










class WorkerCodeComponent {
    constructor(state) {
        this.state = state;
        this.projectId = '';
        this.webworkerCreated = false;
        this.worker = null;
        this.responses = [];
        this.currentCode = '';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.readFromState();
        });
    }
    ngOnChanges({ projectId }) {
        if (projectId) {
            this.stopWorker();
            this.clearResponses();
            this.readFromState();
        }
    }
    updatedCode($event) {
        this.currentCode = $event;
        this.saveToState();
    }
    createWorker() {
        const webWorkerBlobUrl = Object(_gewd_utils_worker__WEBPACK_IMPORTED_MODULE_2__["srcToBlobUrl"])('superWorker.js', this.currentCode);
        try {
            this.worker = new Worker(webWorkerBlobUrl);
            this.worker.onmessage = (e) => {
                this.responses.push(`<<  ${e.data}`);
                console.log('Message received from worker', e.data);
            };
            this.worker.onmessageerror = ev => {
                this.responses.push('ERR ' + ev.data);
                console.log('Error received from worker', ev.data);
            };
            this.worker.onerror = ev => {
                this.responses.push('ERR ' + JSON.stringify({
                    message: ev.message
                }));
            };
            this.webworkerCreated = true;
        }
        catch (ex) {
            this.responses.push(ex);
        }
    }
    stopWorker() {
        var _a;
        (_a = this.worker) === null || _a === void 0 ? void 0 : _a.terminate();
        this.webworkerCreated = false;
    }
    postMessage(value) {
        var _a;
        if (!this.webworkerCreated) {
            return;
        }
        (_a = this.worker) === null || _a === void 0 ? void 0 : _a.postMessage(value);
        this.responses.push('>> ' + value);
    }
    clearResponses() {
        this.responses.length = 0;
    }
    readFromState() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const value = yield this.state.getWorkerCode(this.projectId);
                this.currentCode = value !== null && value !== void 0 ? value : '';
            }
            catch (err) {
                // This code runs if there were any errors.
                console.log(err);
            }
        });
    }
    saveToState() {
        this.state.setWorkerCode(this.projectId, this.currentCode);
    }
}
WorkerCodeComponent.ɵfac = function WorkerCodeComponent_Factory(t) { return new (t || WorkerCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"])); };
WorkerCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WorkerCodeComponent, selectors: [["app-worker-code"]], inputs: { projectId: "projectId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 25, vars: 8, consts: [[3, "value", "changed"], ["mat-raised-button", "", 3, "disabled", "click"], [1, "example-full-width"], ["type", "text", "autocomplete", "off", "matInput", "", 3, "disabled"], ["postMessageInput", ""], ["mat-raised-button", "", 3, "click"]], template: function WorkerCodeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Worker Code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-codemirror", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changed", function WorkerCodeComponent_Template_app_codemirror_changed_2_listener($event) { return ctx.updatedCode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkerCodeComponent_Template_button_click_5_listener() { return ctx.createWorker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Create Worker\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkerCodeComponent_Template_button_click_7_listener() { return ctx.stopWorker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Stop Worker\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Message to the Worker");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkerCodeComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15); return ctx.postMessage(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Send\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Responses: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkerCodeComponent_Template_button_click_20_listener() { return ctx.clearResponses(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.currentCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.webworkerCreated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.webworkerCreated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.webworkerCreated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.webworkerCreated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("  ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 6, ctx.responses), "\n");
    } }, directives: [_codemirror_codemirror_component__WEBPACK_IMPORTED_MODULE_4__["CodemirrorComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["JsonPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3dvcmtlci1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJ3b3JrZXItY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgzLCBoNCB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WorkerCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-worker-code',
                templateUrl: './worker-code.component.html',
                styleUrls: ['./worker-code.component.scss']
            }]
    }], function () { return [{ type: _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"] }]; }, { projectId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "oC9w":
/*!*************************************************!*\
  !*** ./src/app/codemirror/codemirror.module.ts ***!
  \*************************************************/
/*! exports provided: CodemirrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodemirrorModule", function() { return CodemirrorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _codemirror_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codemirror.component */ "yjHL");




class CodemirrorModule {
}
CodemirrorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CodemirrorModule });
CodemirrorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CodemirrorModule_Factory(t) { return new (t || CodemirrorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CodemirrorModule, { declarations: [_codemirror_component__WEBPACK_IMPORTED_MODULE_2__["CodemirrorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_codemirror_component__WEBPACK_IMPORTED_MODULE_2__["CodemirrorComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodemirrorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_codemirror_component__WEBPACK_IMPORTED_MODULE_2__["CodemirrorComponent"]],
                exports: [
                    _codemirror_component__WEBPACK_IMPORTED_MODULE_2__["CodemirrorComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yjHL":
/*!****************************************************!*\
  !*** ./src/app/codemirror/codemirror.component.ts ***!
  \****************************************************/
/*! exports provided: CodemirrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodemirrorComponent", function() { return CodemirrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _codemirror_next_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @codemirror/next/view */ "3Yt4");
/* harmony import */ var _codemirror_next_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @codemirror/next/state */ "dC2d");
/* harmony import */ var _codemirror_next_highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @codemirror/next/highlight */ "mmpu");
/* harmony import */ var _codemirror_next_lang_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @codemirror/next/lang-javascript */ "9rCz");
/* harmony import */ var _codemirror_next_theme_one_dark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @codemirror/next/theme-one-dark */ "8Mv2");
/* harmony import */ var _codemirror_next_language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @codemirror/next/language */ "c6ml");
/* harmony import */ var _codemirror_next_commands__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @codemirror/next/commands */ "9yAF");
/* harmony import */ var _codemirror_next_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @codemirror/next/autocomplete */ "BqAf");










const myStyle = _codemirror_next_highlight__WEBPACK_IMPORTED_MODULE_3__["HighlightStyle"].define({ tag: _codemirror_next_highlight__WEBPACK_IMPORTED_MODULE_3__["tags"].variableName, color: 'green' }, { tag: _codemirror_next_highlight__WEBPACK_IMPORTED_MODULE_3__["tags"].definition(_codemirror_next_highlight__WEBPACK_IMPORTED_MODULE_3__["tags"].variableName), color: 'yellow' }, { tag: _codemirror_next_highlight__WEBPACK_IMPORTED_MODULE_3__["tags"].definitionKeyword, color: 'fuchsia' });
class CodemirrorComponent {
    constructor(element) {
        this.element = element;
        this.codeMirrorView = null;
        this.value = '';
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.codeMirrorView = new _codemirror_next_view__WEBPACK_IMPORTED_MODULE_1__["EditorView"]({
            state: _codemirror_next_state__WEBPACK_IMPORTED_MODULE_2__["EditorState"].create({
                doc: this.value,
                extensions: [
                    // overrides first..
                    _codemirror_next_theme_one_dark__WEBPACK_IMPORTED_MODULE_5__["oneDarkTheme"],
                    myStyle,
                    _codemirror_next_lang_javascript__WEBPACK_IMPORTED_MODULE_4__["javascriptLanguage"],
                    Object(_codemirror_next_autocomplete__WEBPACK_IMPORTED_MODULE_8__["autocompletion"])(),
                    _codemirror_next_view__WEBPACK_IMPORTED_MODULE_1__["keymap"].of([
                        ..._codemirror_next_commands__WEBPACK_IMPORTED_MODULE_7__["defaultKeymap"],
                        ..._codemirror_next_autocomplete__WEBPACK_IMPORTED_MODULE_8__["completionKeymap"],
                        {
                            key: 'Tab',
                            preventDefault: true,
                            run: _codemirror_next_commands__WEBPACK_IMPORTED_MODULE_7__["indentMore"],
                        },
                        {
                            key: 'Shift-Tab',
                            preventDefault: true,
                            run: _codemirror_next_commands__WEBPACK_IMPORTED_MODULE_7__["indentLess"],
                        },
                    ]),
                    Object(_codemirror_next_language__WEBPACK_IMPORTED_MODULE_6__["indentOnInput"])(),
                    // The basic setup needs to be at the end DUH
                    // basicSetup,
                    _codemirror_next_state__WEBPACK_IMPORTED_MODULE_2__["EditorState"].changeFilter.of((tr) => {
                        if (tr.docChanged) {
                            this.value = tr.newDoc.toJSON().join('\n');
                            this.changed.emit(this.value);
                        }
                        return true;
                    })
                ]
            }),
            parent: this.element.nativeElement
        });
    }
    ngOnChanges({ value }) {
        var _a, _b, _c, _d;
        if (value) {
            const currentEditorValue = (_a = this.codeMirrorView) === null || _a === void 0 ? void 0 : _a.state.doc.toJSON().join('\n');
            if (currentEditorValue !== value.currentValue) {
                const transaction = (_b = this.codeMirrorView) === null || _b === void 0 ? void 0 : _b.state.update({
                    changes: { from: 0, to: (_c = this.codeMirrorView) === null || _c === void 0 ? void 0 : _c.state.doc.length, insert: value.currentValue }
                });
                if (transaction) {
                    (_d = this.codeMirrorView) === null || _d === void 0 ? void 0 : _d.dispatch(transaction);
                }
            }
        }
    }
}
CodemirrorComponent.ɵfac = function CodemirrorComponent_Factory(t) { return new (t || CodemirrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
CodemirrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodemirrorComponent, selectors: [["app-codemirror"]], inputs: { value: "value" }, outputs: { changed: "changed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 0, vars: 0, template: function CodemirrorComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%]     .cm-wrap {\n  border: 1px solid lightgray !important;\n}\n[_nghost-%COMP%]     .cm-focused {\n  outline-color: gray !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvZGVtaXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxzQ0FBQTtBQUFKO0FBR0U7RUFDRSw4QkFBQTtBQURKIiwiZmlsZSI6ImNvZGVtaXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xuICAuY20td3JhcCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY20tZm9jdXNlZCB7XG4gICAgb3V0bGluZS1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodemirrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-codemirror',
                templateUrl: './codemirror.component.html',
                styleUrls: ['./codemirror.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map