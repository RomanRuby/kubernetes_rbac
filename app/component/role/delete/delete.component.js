"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var role_service_1 = require("../../../logic-service/role.service");
var roles_1 = require("../../../logic-service/roles");
var DeleteRoleComponent = (function () {
    function DeleteRoleComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.type = false;
        this.viewAdditionalField = false;
    }
    DeleteRoleComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    DeleteRoleComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    DeleteRoleComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.deleteOptions.namespace = productForm.value.namespace;
        this.deleteOptions.name = productForm.value.name;
        this.deleteOptions.apiVersion = productForm.value.apiVersion;
        this.deleteOptions.gracePeriodSeconds = productForm.value.gracePeriodSeconds;
        this.deleteOptions.orphanDependents = productForm.value.orphanDependents;
        this.deleteOptions.preconditions = productForm.value.preconditions;
        var deleteOption = new roles_1.DeleteOptions(new roles_1.TypeMeta("Role", this.deleteOptions.apiVersion), this.deleteOptions.gracePeriodSeconds, this.deleteOptions.orphanDependents, this.deleteOptions.preconditions);
        this.service.deleteRole(this.deleteOptions.name, this.deleteOptions.namespace, deleteOption)
            .subscribe(function (data) {
            _this.response = data;
            _this.type = true;
            console.log(_this.response);
        }, function (error) { return _this.errorMessage = error; });
    };
    DeleteRoleComponent.prototype.reset = function () {
        this.productForm.reset();
    };
    DeleteRoleComponent.prototype.initForm = function () {
        this.deleteOptions = new roles_1.DeleteOptionsDto();
        this.productForm.patchValue(this.deleteOptions);
    };
    DeleteRoleComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            namespace: ["", forms_1.Validators.required],
            name: ["", forms_1.Validators.required],
            apiVersion: ["",],
            gracePeriodSeconds: ["",],
            preconditions: ["",],
            orphanDependents: ["",],
            propagationPolicy: ["",]
        });
    };
    return DeleteRoleComponent;
}());
DeleteRoleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "delete",
        templateUrl: "delete.component.html",
    }),
    __metadata("design:paramtypes", [role_service_1.RoleService,
        forms_1.FormBuilder])
], DeleteRoleComponent);
exports.DeleteRoleComponent = DeleteRoleComponent;
//# sourceMappingURL=delete.component.js.map