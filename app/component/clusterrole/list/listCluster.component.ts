import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";
import {ClusterRoleService} from "../../../logic-service/clusterrole.service";
import {ListDto, ListOptions, TypeMeta} from "../../../logic-service/models/common";
import {RoleResponses} from "../../../logic-service/index";

@Component({
    moduleId: module.id,
    selector: "list",
    templateUrl: "listCluster.component.html",
})

export class ListClusterRoleComponent implements OnInit {
    roleDto: ListDto;
    errorMessage: string;
    productForm: FormGroup;
    responseRole: RoleResponses;
    response: string;
    deleterole: string;
    isInformationOutput: boolean = false;
    isInformationTable: boolean = false;
    isInformationError: boolean = false;


    constructor(private service: ClusterRoleService,
                private fb: FormBuilder) {
    }

    ngOnInit() {
        this.buildForm();
        this.initForm();
    }

    public checkError(element: string, errorType: string) {
        return this.productForm.get(element).hasError(errorType) &&
            this.productForm.get(element).touched
    }

    public onSubmit() {
       let listOptions = new ListOptions();
        listOptions.setTypeMeta(new TypeMeta("ClusterRole",null));

        this.service.listRole(listOptions)
            .subscribe(
                data => {
                    this.responseRole = data;

                    if (typeof this.responseRole != "string") {
                        this.isInformationTable = true;
                    }
                    this.isInformationOutput = true;
                },
                error => this.errorMessage = error
            );
    }

    public deleteList() {
        this.service.deleteCollectionRole(null, null)
            .subscribe(
                data => {
                    this.response = data;
                    this.isInformationTable = false;
                    this.isInformationError = true;
                },
                error => this.errorMessage = error
            );
    }

    public delete(name:string) {
        this.service.deleteRole(name, null).subscribe(
            data => {
            },
            error => this.errorMessage = error
        );
        this.service.deleteRole(name, null).subscribe(
            data => {
            },
            error => this.errorMessage = error
        );
        this.onSubmit();
    }

    private initForm() {
        this.roleDto = new ListDto();
        this.productForm.patchValue(this.roleDto);
    }

    private buildForm() {
        this.productForm = this.fb.group({});
    }

}