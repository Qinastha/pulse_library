import i18n from "i18next";
import {initReactI18next} from "react-i18next";

const resources = {
    en: {
        translation: {
            selectOne: "Select one",
            noMembers: "No selected members",
            addItem: "Add item",
            uploadImage: "Please upload your picture",
            'label.name': "Name",
            'label.description': "Description",
            'label.members': "Select chat members",
            'label.avatar': "Avatar",
            'label.email': "Email",
            'label.password': "Password",
            'label.projectPicture': "Project Picture",
            'label.projectName': "Project name",
            'label.projectMembers': "Select Members",
            'label.profilePicture': "Profile Picture",
            'label.phoneNumber': "Phone number",
            'label.gender': "Gender",
            'label.street': "Street",
            'label.street2': "Apt, Suite",
            'label.city': "City",
            'label.zipCode': "Zip Code",
            'label.country': "Country",
            'label.language': "Language",
            'label.timeZone': "Time Zone",
            'label.firstName': "First Name",
            'label.lastName': "Last Name",
            'label.userName': "Username",
            'label.dob': "Date of Birth",
            'label.position': "Position",
            'label.project manager': "Project manager",
            'label.developer': "Developer",
            'label.tester': "Tester",
            'label.designer': "Designer",
            'label.male': "Male",
            'label.female': "Female",
            'label.other': "Other",
            'label.taskTitle': "Task Title",
            'label.taskDescription': "Task Description",
            'label.checkList': "Check List",
            'label.deadline': "Deadline",
            'label.taskDepartment': "Task Department",
            'label.taskStatus': "Task Status",
            'label.toDo': "To Do",
            'label.inProgress': "In progress",
            'label.onReview': "On review",
            'label.onTesting': "On testing",
            'label.done': "Done",
            'label.canceled': "Canceled",
        }
    },
    ua: {
        translation: {
            selectOne: "Виберіть один",
            noMembers: "Немає вибраних учасників",
            addItem: "Додати елемент",
            uploadImage: "Будь ласка, завантажте зображення",
            'label.name': "Назва",
            'label.description': "Опис",
            'label.members': "Виберіть учасників чату",
            'label.avatar': "Аватар",
            'label.email': "Електронна пошта",
            'label.password': "Пароль",
            'label.projectPicture': "Зображення проекту",
            'label.projectName': "Назва проекту",
            'label.projectMembers': "Виберіть учасників",
            'label.profilePicture': "Зображення профілю",
            'label.phoneNumber': "Номер телефону",
            'label.gender': "Стать",
            'label.street': "Вулиця",
            'label.street2': "Квартира, Номер",
            'label.city': "Місто",
            'label.zipCode': "Поштовий індекс",
            'label.country': "Країна",
            'label.language': "Мова",
            'label.timeZone': "Часовий пояс",
            'label.firstName': "Ім'я",
            'label.lastName': "Прізвище",
            'label.userName': "Ім'я користувача",
            'label.dob': "Дата народження",
            'label.position': "Посада",
            'label.project manager': "Керівник проекту",
            'label.developer': "Розробник",
            'label.tester': "Тестувальник",
            'label.designer': "Дизайнер",
            'label.male': "Чоловік",
            'label.female': "Жінка",
            'label.other': "Інше",
            'label.taskTitle': "Назва завдання",
            'label.taskDescription': "Опис завдання",
            'label.checkList': "Контрольний список",
            'label.deadline': "Термін виконання",
            'label.taskDepartment': "Відділ завдання",
            'label.taskStatus': "Статус завдання",
            'label.toDo': "До виконання",
            'label.inProgress': "В процесі",
            'label.onReview': "На розгляді",
            'label.onTesting': "На тестуванні",
            'label.done': "Виконано",
            'label.canceled': "Скасовано",
        }
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
})

export default i18n;