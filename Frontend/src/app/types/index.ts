import React from "react";
import { IconType } from "react-icons/lib";

export interface IPage {
  name: string;
  link: string;
  content: React.ReactNode;
}

export interface IPageGroup {
  header: string;
  icon: IconType;
  pages: IPage[];
}

export interface IDashboard {
  dashboardName: string;
  logo: React.ReactNode;
  pages: IPage[];
  sidebar: (IPageGroup | IPage)[];
}

// export interface Patient {
//   id: string;
//   name: string;
//   dateOfBirth: string;
//   isDateOfBirthEstimated: boolean;
//   contactNumber: string;
//   gender: string;
// }

// export interface Ticket {
//   description: string | null;
//   id: string;
//   price: number;
//   isPaid: boolean;
//   isResolved: boolean;
//   issueDate: string;
//   patient: {
//     id: string;
//     name: string;
//     contactNumber: string;
//   };
//   department: {
//     id: string;
//     name: string;
//     location: string;
//   };
// }

// export type PatientWithActiveTicket = Patient & { ticket: Ticket | null };
// export type PatientWithTickets = Patient & { tickets: Ticket[] };
