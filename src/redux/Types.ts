import { ChangeEvent, FormEvent } from "react";
import rootReducer from "./reducers";

export type InputChange = ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export type FormSubmit = FormEvent<HTMLFormElement>;

export type RootStore = ReturnType<typeof rootReducer>;

export interface IAlert {
    loading?: boolean;
    success?: string | string[];
    errors?: string | string[];
}

export interface IBlog {
    title: string | null;
    subTitle: string | null;
    content: string | null;
    number: number | null;
    desc: string | null;
    date: string | null;
    category: string[] | undefined;
}
