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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var role_service_1 = require("../../../logic-service/role.service");
var roles_1 = require("../../../logic-service/roles");
var DeleteCollectionRoleComponent = (function () {
    function DeleteCollectionRoleComponent(service, activatedRoute, fb, router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.router = router;
    }
    DeleteCollectionRoleComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductFromRoute();
    };
    DeleteCollectionRoleComponent.prototype.checkError = function (element, errorType) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched;
    };
    DeleteCollectionRoleComponent.prototype.onSubmit = function (productForm) {
        var _this = this;
        this.deleteCollection.nameUrl = productForm.value.nameUrl;
        this.deleteCollection.namespace = productForm.value.namespace;
        this.deleteCollection.name = productForm.value.name;
        this.deleteCollection.kind = productForm.value.kind;
        this.deleteCollection.apiVersion = productForm.value.apiVersion;
        this.deleteCollection.gracePeriodSeconds = productForm.value.gracePeriodSeconds;
        this.deleteCollection.orphanDependents = productForm.value.orphanDependents;
        this.deleteCollection.preconditions = productForm.value.preconditions;
        this.deleteCollection.propagationPolicy = productForm.value.propagationPolicy;
        this.deleteCollection.kindList = productForm.value.kindList;
        this.deleteCollection.namespaceList = productForm.value.namespaceList;
        var listOption = new roles_1.ListOptions();
        listOption.setTypeMeta(new roles_1.TypeMeta(this.deleteCollection.kindList, this.deleteCollection.namespaceList));
        var deleteOption = new roles_1.DeleteOptions(new roles_1.TypeMeta(this.deleteCollection.kind, this.deleteCollection.apiVersion), this.deleteCollection.gracePeriodSeconds, this.deleteCollection.orphanDependents, this.deleteCollection.preconditions, this.deleteCollection.propagationPolicy);
        this.service.deleteCollectionRole(this.deleteCollection.nameUrl, deleteOption, listOption)
            .subscribe(function () { return console.log("asdf"); }, function (error) { return _this.errorMessage = error; });
    };
    DeleteCollectionRoleComponent.prototype.goBack = function () {
        this.router.navigate(["/products/create"]);
    };
    DeleteCollectionRoleComponent.prototype.getProductFromRoute = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = params["id"];
            _this.deleteCollection = new roles_1.DeleteCollectionDto();
            _this.productForm.patchValue(_this.deleteCollection);
        });
    };
    DeleteCollectionRoleComponent.prototype.buildForm = function () {
        this.productForm = this.fb.group({
            nameUrl: ["", forms_1.Validators.required],
            namespace: ["", forms_1.Validators.required],
            kind: ["", forms_1.Validators.required],
            name: ["", forms_1.Validators.required],
            apiVersion: ["", forms_1.Validators.required],
            gracePeriodSeconds: ["", forms_1.Validators.required],
            preconditions: ["", forms_1.Validators.required],
            orphanDependents: ["", forms_1.Validators.required],
            propagationPolicy: ["", forms_1.Validators.required],
            deletionPropagation: ["", forms_1.Validators.required],
            kindList: ["", forms_1.Validators.required],
            namespaceList: ["", forms_1.Validators.required],
        });
    };
    return DeleteCollectionRoleComponent;
}());
DeleteCollectionRoleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "deleteCollection",
        templateUrl: "deleteCollection.component.html",
    }),
    __metadata("design:paramtypes", [role_service_1.RoleService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder,
        router_1.Router])
], DeleteCollectionRoleComponent);
exports.DeleteCollectionRoleComponent = DeleteCollectionRoleComponent;
//# sourceMappingURL=deleteCollection.component.js.map