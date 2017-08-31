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
var clusterrole_service_1 = require("../../../logic-service/clusterrole.service");
var common_1 = require("../../../logic-service/models/common");
var ListClusterRoleComponent = (function () {
    function ListClusterRoleComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.viewAdditionalField = false;
        this.type = false;
        this.responseValue = true;
    }
    ListClusterRoleComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    ListClusterRoleComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    ListClusterRoleComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.roleDto.kind = productForm.value.kind;
        this.roleDto.apiVersion = productForm.value.apiVersion;
        var listOptions;
        listOptions = new common_1.ListOptions();
        listOptions.setTypeMeta(new common_1.TypeMeta("ClusterRole", this.roleDto.apiVersion));
        this.service.listRole(listOptions)
            .subscribe(function (data) {
            _this.responseRole = data;
            _this.responseValue = true;
            console.log(_this.responseRole);
            if (typeof _this.responseRole == "string") {
                _this.responseValue = false;
            }
            _this.type = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    ListClusterRoleComponent.prototype.reset = function () {
        this.productForm.reset();
    };
    ListClusterRoleComponent.prototype.initForm = function () {
        this.roleDto = new common_1.ListDto();
        this.productForm.patchValue(this.roleDto);
    };
    ListClusterRoleComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            apiVersion: ["",]
        });
    };
    return ListClusterRoleComponent;
}());
ListClusterRoleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "list",
        templateUrl: "listCluster.component.html",
    }),
    __metadata("design:paramtypes", [clusterrole_service_1.ClusterRoleService,
        forms_1.FormBuilder])
], ListClusterRoleComponent);
exports.ListClusterRoleComponent = ListClusterRoleComponent;
//# sourceMappingURL=listCluster.component.js.map