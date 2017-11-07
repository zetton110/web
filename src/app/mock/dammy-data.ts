import { InMemoryDbService } from 'angular-in-memory-web-api';

export class BooksData implements InMemoryDbService {

    createDb() {
        let books = [
            {
                "id": 0,
                "fullName": "Peter Morris",
                "title": "Obcaecati Quam",
                "description": "Temporibus Voluptas Ab Libero Voluptate Laboriosam Corporis Velit Magnam Illo Assumenda Placeat Commodi Culpa Dolores Harum Ut Debitis Eum Nihil.",
                "reviews": "29 reviews"
            },
            {
                "id": 1,
                "fullName": "Edna Morrison",
                "title": "Quos Voluptatum",
                "description": "Maiores Facilis Culpa Porro Quam Quas Fugiat Quod Voluptate Iste Iure Laudantium Repellat Ab Dolorem Ullam Perferendis Ex Error Eos Sequi Molestiae Dicta Deleniti Possimus Accusantium Et Consectetur Cum Voluptatum Debitis Voluptatem Magnam Libero.",
                "reviews": "5 reviews"
            },
            {
                "id": 2,
                "fullName": "Ralph Moreno",
                "title": "Veniam",
                "description": "Laboriosam Alias Delectus Odit Itaque Ad Voluptates Facilis Vitae Pariatur Quod Voluptatem Nemo Ullam Possimus Assumenda Quas Ab Voluptas Amet Veritatis Iure Laudantium Sequi Adipisci Ex Sint Reiciendis Non Qui Ratione Magni Excepturi Voluptate Molestias Officia Et.",
                "reviews": "55 reviews"
            },
            {
                "id": 3,
                "fullName": "Leona Boone",
                "title": "Culpa Quia Nemo Amet",
                "description": "Animi Eligendi Rem Qui Accusantium Officiis Eaque Laborum Veritatis Mollitia Iure Obcaecati Quod Unde Maiores Eius Neque Dicta Quos Eveniet Quasi Praesentium Distinctio Consequuntur Ab Nemo Ea Non.",
                "reviews": "21 reviews"
            },
            {
                "id": 4,
                "fullName": "Louise Johnston",
                "title": "Itaque Incidunt Quis Amet",
                "description": "Culpa Repellat Non Quae Voluptatem Ducimus Consequuntur Alias Doloremque Itaque Harum Autem Deserunt Eos Atque Eligendi Cum Tempore Expedita Placeat Fuga Aliquid Molestias Minima Est Corporis Modi Distinctio.",
                "reviews": "10 reviews"
            },
            {
                "id": 5,
                "fullName": "Sally Wise",
                "title": "Id",
                "description": "Iusto Ipsum Ab Impedit Quibusdam Earum Aspernatur Vitae Pariatur Id Porro Blanditiis Reprehenderit Et Ad Dolore Minima Veritatis Modi Incidunt Repellendus Corrupti Soluta Molestias Esse Inventore Est Fugit Qui Animi Praesentium Quis Omnis Molestiae Quasi Possimus Quia.",
                "reviews": "1 reviews"
            },
            {
                "id": 6,
                "fullName": "Louisa Parsons",
                "title": "Accusantium Fugiat Reprehenderit",
                "description": "Repellat Placeat Rerum Commodi Neque Inventore Excepturi Quis Suscipit Ratione Omnis Ut Voluptatum Optio Quas Deleniti Dolorem Facere Sint Ea Quidem Officia Non Mollitia Nam Odit Nisi Consequuntur Hic Quibusdam Odio Cum Cumque Quia Ipsa.",
                "reviews": "45 reviews"
            },
            {
                "id": 7,
                "fullName": "Jennie Black",
                "title": "Quaerat Quae Alias Quisquam",
                "description": "Recusandae Sapiente Aspernatur Pariatur Molestias Iure Quod Vel Iste Provident Expedita Possimus Ducimus Hic Placeat Aliquam Tempore Nemo Deleniti Quidem Error Adipisci Iusto Minus Aliquid Repudiandae Ipsam Reprehenderit Officia Debitis Eum Officiis Dolore Consectetur Facilis Molestiae Temporibus Optio.",
                "reviews": "7 reviews"
            },
            {
                "id": 8,
                "fullName": "Landon Russell",
                "title": "Consequatur Aut Velit",
                "description": "Vero Pariatur Officiis Ipsa Iste Corporis Quam Beatae Cum Mollitia Distinctio Iure Et Magnam Placeat Aliquam Laborum Saepe Optio Vel Hic Error Expedita Nesciunt Voluptatum Tempore Minima Quis Repellat Repellendus Quibusdam Numquam Architecto Neque Voluptatem Quae Sed Delectus Asperiores.",
                "reviews": "63 reviews"
            },
            {
                "id": 9,
                "fullName": "Nora Blake",
                "title": "Sit",
                "description": "Tempore Deserunt Corporis Provident Dolore Molestiae Esse Voluptate Nostrum Eos Illum In Doloribus Id Cupiditate Quod Nesciunt Repellendus Excepturi Voluptatem Tenetur Cum Quibusdam Culpa Sed Distinctio Laboriosam Animi Consequuntur Sequi Perferendis Sapiente Minus Ad Fugiat Laborum Quia Corrupti.",
                "reviews": "31 reviews"
            }
        ];

        return { books };
    }
}