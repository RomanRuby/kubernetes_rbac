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
var GetRoleComponent = (function () {
    function GetRoleComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.type = false;
        this.responseValue = true;
        this.viewAdditionalField = false;
    }
    GetRoleComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    GetRoleComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    GetRoleComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.getOptions.nameUrl = productForm.value.nameUrl;
        this.getOptions.name = productForm.value.name;
        var getOption = new roles_1.GetOptions(new roles_1.TypeMeta("Role", this.getOptions.apiVersion), this.getOptions.resourceVersion, this.getOptions.includeUninitialized);
        this.service.getRole(this.getOptions.name, this.getOptions.nameUrl, getOption)
            .subscribe(function (data) {
            _this.responseRole = data;
            _this.responseValue = typeof _this.responseRole != "string";
            _this.type = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    GetRoleComponent.prototype.reset = function () {
        this.productForm.reset();
    };
    GetRoleComponent.prototype.initForm = function () {
        this.getOptions = new roles_1.GetOptionsDto();
        this.productForm.patchValue(this.getOptions);
    };
    GetRoleComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            name: ["", forms_1.Validators.required],
            nameUrl: ["", forms_1.Validators.required],
            apiVersion: ["",],
            resourceVersion: ["",],
            includeUninitialized: ["",]
        });
    };
    return GetRoleComponent;
}());
GetRoleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "get",
        templateUrl: "get.component.html",
    }),
    __metadata("design:paramtypes", [role_service_1.RoleService,
        forms_1.FormBuilder])
], GetRoleComponent);
exports.GetRoleComponent = GetRoleComponent;
//# sourceMappingURL=get.component.js.map