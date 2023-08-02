import IProfessional from "./IProfessional";

export default interface IQuery extends IProfessional {
    id: number,
    date: string,
    time: string,
    professional: Array<IProfessional>
    specialty: string,
    patient: string,
    modality: string
}