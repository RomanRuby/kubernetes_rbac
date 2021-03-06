import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";

import 'rxjs/add/operator/map'
import {ListDto, ListOptions, TypeMeta} from "../../../../models/common";
import {RoleResponses} from "../../../../models/role";
import {ClusterRoleService} from "../../../../services/routings/clusterrole.service";

@Component({
    moduleId: module.id,
    selector: "list",

    templateUrl: "listCluster.component.html",
})

export class ListClusterRoleComponent implements OnInit {

    roleDto: ListDto;
    productForm: FormGroup;
    responseRole: RoleResponses;
    errorMessage: string;
    response: string;
    deleteRole: string;
    isInformationOutput: boolean = false;
    isInformationTable: boolean = false;


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
        listOptions.setTypeMeta(new TypeMeta("ClusterRole"));

        this.service.listRole(listOptions)
            .subscribe(
                data => {
                    this.responseRole = data;
                    this.isInformationTable = true;
                    this.isInformationOutput = true;
                }
            );

    }

    public deleteList() {
        this.service.deleteCollectionRole()
            .subscribe(
                data => {
                    this.response = data;
                    this.isInformationTable = false;
                },
                error => this.errorMessage = error
            );
    }

    public delete(name: string) {
        this.service.deleteRole(name).subscribe(
            data => {
            }
        );
        this.responseRole.items = this.responseRole.items.filter(items => items.metadata.name != name);
    }

    private initForm() {
        this.roleDto = new ListDto();
        this.productForm.patchValue(this.roleDto);
    }

    private buildForm() {
        this.productForm = this.fb.group({});
    }
}