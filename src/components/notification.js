import { notification } from 'ant-design-vue';
const openNotification = (type, title, msg) => {
    notification[type]({
        message: title,
        description: msg,
    });
};
export default openNotification;