export declare class TemplateService2 {
    private websites;
    createWebsite(content: {
        title: string;
        body: string;
        to: string;
        from: string;
        text1: string;
        text2: string;
        mediaPath?: string;
        mediaPath1?: string;
        mediaPath2?: string;
        mediaPath3?: string;
        mediaPath4?: string;
        mediaPath5?: string;
    }): {
        id: string;
        message: string;
    };
    getWebsite(id: string): {
        content: any;
        error?: undefined;
    } | {
        error: string;
        content?: undefined;
    };
}
