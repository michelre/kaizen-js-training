import $ from 'jquery';

export const add = (op1, op2) => $.get(`/add/${op1}/${op2}`);

export const sub = (op1, op2) => $.get(`/sub/${op1}/${op2}`);

export const mult = (op1, op2) => $.get(`/mult/${op1}/${op2}`);

export const div = (op1, op2) => $.get(`/div/${op1}/${op2}`);
