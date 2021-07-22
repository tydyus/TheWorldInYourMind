export interface Badge {
    name: string;
    nbr: number;
}
export interface Info {
    page: string;
    game: {
        user: {
            name: string;
            badges: Array<Badge>;
        };
        node: number;
    };
}
