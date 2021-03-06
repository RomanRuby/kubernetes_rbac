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
var role_1 = require("../../../../models/role");
var clusterrole_service_1 = require("../../../../services/routings/clusterrole.service");
var common_1 = require("../../../../models/common");
var CreateClusterRoleComponent = (function () {
    function CreateClusterRoleComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        this.isInformationOutput = false;
        this.isInformationError = true;
    }
    CreateClusterRoleComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.initForm();
    };
    CreateClusterRoleComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    CreateClusterRoleComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.roleDto.name = productForm.value.name;
        this.roleDto.policyRules = productForm.value.policyRules;
        var policyRulesArrays = [];
        for (var i = 0; i < this.roleDto.policyRules.length; i++) {
            policyRulesArrays.push(new role_1.PolicyRule(this.roleDto.policyRules[i].verbs.split(','), this.roleDto.policyRules[i].apiGroups.split(','), this.roleDto.policyRules[i].resources.split(','), this.roleDto.policyRules[i].resourceNames.split(',')));
        }
        var role = new role_1.Role(new common_1.TypeMeta("ClusterRole", this.roleDto.apiVersion), new role_1.ObjectMetaView(this.roleDto.name, this.roleDto.namespace, this.roleDto.generation, this.roleDto.deletionTimestamp, this.roleDto.deletionGracePeriodSeconds), policyRulesArrays);
        this.service.createRole(role)
            .subscribe(function (data) {
            _this.isInformationError = false;
            _this.responseRole = data;
        }, function (error) {
            _this.errorMessage = error;
            _this.isInformationError = true;
        });
        this.isInformationOutput = true;
    };
    CreateClusterRoleComponent.prototype.reset = function () {
        this.productForm.reset();
    };
    CreateClusterRoleComponent.prototype.initForm = function () {
        this.roleDto = new role_1.RoleDto();
        this.productForm.patchValue(this.roleDto);
    };
    CreateClusterRoleComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            name: ["", forms_1.Validators.required],
            policyRules: this.fb.array([
                this.initPolicyRules(),
            ])
        });
    };
    CreateClusterRoleComponent.prototype.initPolicyRules = function () {
        return this.fb.group({
            verbs: ["", forms_1.Validators.required],
            apiGroups: ["",],
            resources: ["",],
            resourceNames: ["",],
        });
    };
    CreateClusterRoleComponent.prototype.addPolicyRules = function () {
        var control = this.productForm.controls['policyRules'];
        control.push(this.initPolicyRules());
    };
    CreateClusterRoleComponent.prototype.removePolicyRules = function (i) {
        var control = this.productForm.controls['policyRules'];
        control.removeAt(i);
    };
    return CreateClusterRoleComponent;
}());
CreateClusterRoleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "create",
        templateUrl: "createCluster.component.html",
    }),
    __metadata("design:paramtypes", [clusterrole_service_1.ClusterRoleService,
        forms_1.FormBuilder])
], CreateClusterRoleComponent);
exports.CreateClusterRoleComponent = CreateClusterRoleComponent;
//# sourceMappingURL=createCluster.component.js.map