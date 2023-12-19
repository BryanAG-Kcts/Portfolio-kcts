export interface certificate {
    name: string;
    pdf: string;
    img: string;
}

export interface ICertificate {
    title: string;
    paragraph: string;
    certificates: certificate[];
}
