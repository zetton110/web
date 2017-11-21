export namespace WAKATAKE{
    export const TEAM_NAME = 'チーム　若竹';
}


export namespace SKILL{
    // 打撃
    export const BLOW = {
        EFFECT : "blow",
        RATE : 1
    }
    // はねる
    export const SPLASH = {
        EFFECT : "poyooon",
        RATE : 2
    }
    // めんどい
        export const MENDOI = {
        EFFECT : "mendoi",
        RATE : 0
    }
    // 空元気
        export const KARAGENKI = {
        EFFECT : "grow",
        RATE : 0
    }
    // 午後休
        export const GOGOKYU = {
        EFFECT : "bounceOutUp",
        RATE : 0
    }
}

export namespace MEMBER{
    export const KANAGAWA = {
        NAME: 'kngw',
        ICON: '/assets/pipo-enemy025.png',
        HIT_POINT: 10,
        SKILLS: [SKILL.MENDOI,SKILL.SPLASH]
    };
    export const FUJIWARA = {
        NAME: 'fuji',
        ICON: 'assets/pipo-enemy025a.png',
        HIT_POINT: 10,
        SKILLS: [SKILL.BLOW]
    };
    export const HATSUDA = {
        NAME: 'tastu',
        ICON: '/assets/pipo-enemy025b.png',
        HIT_POINT: 10,
        SKILLS: [SKILL.BLOW,SKILL.SPLASH,SKILL.KARAGENKI,SKILL.MENDOI]
    };
    export const ITO = {
        NAME: 'ito',
        ICON: '/assets/pipo-enemy025.png',
        HIT_POINT: 10,
        SKILLS: [SKILL.GOGOKYU]
    };
}

export namespace BATTLE_ACTION{
    export const PHAZE = {
        PLAYER_TURN : "player_turn",
        TARGET_SELECT: "target_select",
        ENEMY_TURN : "emeny_turn"
    }
    export const SUBJECT = {
        PLAYER : "player"
    }
    export const TARGET = {
        ALL : ""
    }
}
