//dialog types
export type SettingsInfoProps = {
    open: boolean,
    handleClose: () => void,
}
//menu types
export type MenuProps = {
    title: string,
    openMenu: boolean,
    anchorEl: HTMLElement | null,
    buttonId: string,
    handleClose: () => void,
    menuId: string,
    text: string,
}
//charts types
export type ChartPropsType = Record<string, boolean>;
export type ChartLabels = {
    value: string,
    color: string,
}[]
//order type
export type Order = {
    id: number
    customerName: string,
     totalAmount: number,
    item: string,
    location: string,
    status: string,
    statusBg: string,
    image: string
}
//employee type 
export type Employee = {
    id: number,
    name: string,
    designation: string,
    hireDate: string,
    country: string,
    reportsTo: string,
    image: string
}
//customer type
export type Customer = {
    id: number,
    name: string,
    email: string,
    image: string,
    projectName: string,
    status: string,
    statusBg: string,
    weeks: string,
    budget: string,
    location: string,
}
export type Id = string | number
//kanban column type
export type Column = {
    id: Id,
    title: string,
}
//task type
export type Task = {
    id: Id,
    columnId: Id,
    content: string,
}
//event type
export type EventType = {
    id: string,
    title: string,
    location: string,
    start: string,
    end: string,
}