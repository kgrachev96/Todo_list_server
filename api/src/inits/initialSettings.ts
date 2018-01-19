import InitialSettings from "../entity/InitialSettings";

export async function initSettings() {
    const initialSettings = await InitialSettings.findOne();
    if (!initialSettings) {
        await settings();
    }
}

async function settings() {
    const settings = new InitialSettings();
    settings.title = "Ваша первая задача на сегодня...";
    settings.completed = true;
    await settings.save();
}