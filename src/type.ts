export type DataType = 'string' | 'number' | 'array' | 'object' | 'bigint' | 'function' | 'symbol' | 'undefined' | 'date' | 'null' | 'boolean';

export type StringValidatorFn = (str: string) => boolean;
export type ObjectValidatorFn = (obj: any) => boolean;
export type EntryObjectInstanceValidatorFn = (object: any) => boolean;
export type NumberValidatorFn = (num: string | number | bigint) => boolean;
export type DateValidatorFn = (date: string | number | Date) => boolean;

export type ValidatorFn = StringValidatorFn | ObjectValidatorConfig | NumberValidatorFn | DateValidatorFn;

export interface ObjectValidatorConfig {
    allowEmptyObject?: boolean;
    entries?: EntryObjectInstance[] | EntryObjectValidatorConfig[];
    maxKeys?: number;
    minKeys?: number;
    equKeys?: number;
}

export interface EntryObjectValidatorConfig {
    key: string;
    required?: boolean;
    dataType?: DataType | DataType[];
    validator?: EntryObjectInstanceValidatorFn;
    validators?: EntryObjectInstanceValidatorFn[];
}

export interface EntryObjectInstance {
    readonly validator: EntryObjectInstanceValidatorFn;
    readonly _tyInstance: true;
}

export interface StringValidatorConfig {
    equLength?: number;
    minLength?: number;
    maxLength?: number;
    regex?: RegExp;
}

export interface NumberValidatorConfig {
    equAt?: number | bigint;
    minAt?: number | bigint;
    maxAt?: number | bigint;
    transformStringTo?: 'number' | 'bigint';
    allowBigInt?: boolean;
    mustBeBigInt?: boolean;
    allowFloat?: boolean;
    allowInfinite?: boolean;
    allowNoSafeInteger?: boolean;
    allowNegatifAmout?: boolean;
}

export interface DateValidatorConfig {
    transformToDate?: boolean;
    equAt?: Date | number;
    minAt?: Date | number;
    maxAt?: Date | number;
}