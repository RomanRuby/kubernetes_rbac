import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {RoleService} from "../../../logic-service/role.service";
import {DeleteOptions, DeleteOptionsDto, TypeMeta} from "../../../logic-service/roles";
import {ClusterRoleService} from "../../../logic-service/clusterrole.service";

@Component({
    moduleId: module.id,
    selector: "delete",
    templateUrl: "delete.component.html",
})

export class DeleteRoleComponent implements OnInit {
    deleteOptions: DeleteOptionsDto;
    errorMessage: string;
    productForm: FormGroup;

    constructor(private service: ClusterRoleService,
                private activatedRoute: ActivatedRoute,
                private fb: FormBuilder,
                private router: Router) {
    }

    ngOnInit() {
        this.buildForm();
        this.getProductFromRoute();
    }

    public checkError(element: string, errorType: string) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched
    }

    public onSubmit(productForm: FormGroup) {
        this.deleteOptions.name = productForm.value.name;
        this.deleteOptions.kind = productForm.value.kind;
        this.deleteOptions.apiVersion = productForm.value.apiVersion;
        this.deleteOptions.gracePeriodSeconds = productForm.value.gracePeriodSeconds;
        this.deleteOptions.orphanDependents = productForm.value.orphanDependents;
        this.deleteOptions.preconditions = productForm.value.preconditions;
        this.deleteOptions.propagationPolicy = productForm.value.propagationPolicy;

        let deleteOption = new DeleteOptions(
            new TypeMeta(this.deleteOptions.kind, this.deleteOptions.apiVersion), this.deleteOptions.gracePeriodSeconds, this.deleteOptions.orphanDependents,
            this.deleteOptions.preconditions, this.deleteOptions.propagationPolicy);
        this.service.deleteRole(this.deleteOptions.name, deleteOption)
            .subscribe(
                () => console.log("asdf"),
                error => this.errorMessage = error
            );
    }

    public goBack() {
        this.router.navigate(["/products/create"]);
    }

    private getProductFromRoute() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = params["id"];

            this.deleteOptions = new DeleteOptionsDto();
            this.productForm.patchValue(this.deleteOptions);
        });
    }

    private buildForm() {
        this.productForm = this.fb.group({
            kind: ["", Validators.required],
            name: ["", Validators.required],
            apiVersion: ["", Validators.required],
            gracePeriodSeconds: ["", Validators.required],
            preconditions: ["", Validators.required],
            orphanDependents: ["", Validators.required],
            propagationPolicy: ["", Validators.required],
            deletionPropagation: ["", Validators.required]
        });
    }
}