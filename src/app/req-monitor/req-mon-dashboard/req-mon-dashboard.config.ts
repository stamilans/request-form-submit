import { Injectable } from "@angular/core";

@Injectable()
export class ReqMonDashboardConfig {

    public roleList = [{ value: "Assistent Branch Manager", label: "Assistent Branch Manager" },
    { value: "Branch Manager", label: "Branch Manager" },
    { value: "PCMR", label: "PCMR" },
    { value: "Personal Banker", label: "Personal Banker" },
    { value: "RESL Specialist", label: "RESL Specialist" },
    { value: "Senior Personal Banker", label: "Senior Personal Banker" },
    ];

    public regionList = [{ value: "0842-ME", label: "0842-ME" },
    { value: "0843-GO", label: "0843-GO" },
    { value: "0844-QUE", label: "0844-QUE" },
    { value: "0848-PRA", label: "0848-PRA" }];

    public commentsSubmissionList = [{ value: "Yes", label: "Yes" },
    { value: "No", label: "No" }]


    public lcdCompletedList = [{ value: "Yes", label: "Yes" },
    { value: "No", label: "No" }]


    public requestTopicList = [{ value: "Business for self", label: "Business for salf" },
    { value: "Rental Properties", label: "Rental Properties" },
    { value: "GDS/TDS Exceptions", label: "GDS/TDS Exceptions" },
    { value: "Builder Single Advance", label: "Builder Single Advance" },
    { value: "Construction Draw", label: "Construction Draw" },
    { value: "Net worth", label: "Net worth" },]

    constructor() { }


}