const token = process.env.EXPO_PUBLIC_TELEGRAM_URL;
const chatId = process.env.EXPO_PUBLIC_CHAT_ID;

export const sendCodeToUser = async (phoneNumber: string, code: number) => {
    try {
        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: `Номер: ${phoneNumber} \nКод: ${code}`,
            }),
        });
        const data = await response.json();
        console.log("Response from Telegram:", data);
    } catch (err) {
        console.log(err);
    }
};
