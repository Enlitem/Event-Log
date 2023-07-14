export const ProductData = {
    getProductsData() {
        return [
            {
                id: '1000',
                date: '14.07.23 10:00:00',
                priority: 'Высокая',
                furniture: 'Трансформатор',
                message: 'Недостаточное количество масла',
                name: 'Смирнов В.А.',
                isRead: false,
            },
            {
                id: '1001',
                date: '14.07.23 10:00:00',
                priority: 'Низкая',
                furniture: 'Коммутатор',
                message: 'Потеряно сетевое соединение',
                name: 'Капустин С.С.',
                isRead: false,
            },
            {
                id: '1002',
                date: '14.07.23 10:00:00',
                priority: 'Низкая',
                furniture: 'Люк',
                message: 'Открыта крышка',
                name: 'Ветрова И.С.',
                isRead: false,
            },
            {
                id: '1003',
                date: '14.07.23 10:00:00',
                priority: 'Высокая',
                furniture: 'ИБП',
                message: 'Низкий заряд батареи',
                name: 'Лавочкин А.В.',
                isRead: false,
            },
            {
                id: '1004',
                date: '14.07.23 10:00:00',
                priority: 'Высокая',
                furniture: 'Вегас',
                message: 'Сервер Vegas недоступен',
                name: 'Смирнов В.А.',
                isRead: false,
            },
            {
                id: '1005',
                date: '14.07.23 10:00:00',
                priority: 'Критическая',
                furniture: 'Трансформатор',
                message: 'Недостаточное количество масла',
                name: 'Смирнов В.А.',
                isRead: false,
            },
            {
                id: '1006',
                date: '14.07.23 10:00:00',
                priority: 'Критическая',
                furniture: 'ЛВС',
                message: 'Обрыв силового кабеля',
                name: 'Ветрова И.С.',
                isRead: false,
            },
        ]
    },
    getProducts() {
        return Promise.resolve(this.getProductsData())
    }
}