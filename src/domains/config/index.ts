type AppConfig = {
    redis: string;
}

const Config: AppConfig = {
    redis: "redis://127.0.0.1:6379"
};

export { Config };