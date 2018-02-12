export class Project {
    name: string;
    workType: [WorkType];
    description: string;
    img: [any];
}

export class WorkType {
    key$: any;
    work: string;
}

export class Email {
    name: string;
    email: string;
    date: Date;
    msg: string;
    html: any;
}

