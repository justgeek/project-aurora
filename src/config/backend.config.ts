const environment: string = "production";
export const getBackendURL = (): string => {
    switch (environment) {
        case "production":
            return "https://reqres.in/api/";
        case "dev":
            return "";
        case "int":
            return "";
        default:
            return "https://reqres.in/api/";

    }
}