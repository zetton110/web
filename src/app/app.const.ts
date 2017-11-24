/*
 * 定数
 * 若竹の情報
*/
export namespace WAKATAKE{
    export const TEAM_NAME = 'チーム　若竹';
}
/*
 * 定数
 * キャラクタースキル
*/
export namespace SKILL{
    
    /**　打撃 スキル */
    export const BLOW = {
        EFFECT : "blow",
        RATE : 1,
        MESSAGE: "　の　こうげき"
    }
    /**　はねる スキル */
    export const SPLASH = {
        EFFECT : "poyooon",
        RATE : 2,
        MESSAGE: "　は　おもむろにはねた"
    }

    /**　めんどい スキル */
    export const MENDOI = {
        EFFECT : "yurayura",
        RATE : 0,
        MESSAGE: "　は　しゅっしゃ　したくない"
    }

    /**　せのび スキル */
    export const SENOBI = {
        EFFECT : "grow",
        RATE : 0,
        MESSAGE: "　は　つよがった"
    }
    /**　大ジャンプ スキル */
    export const HEIGH_JUMP = {
        EFFECT : "bounceOutUp",
        RATE : 0,
        MESSAGE: "　は　どこかとおくへいきたい"
    }
    /**　ゴムパッチン スキル */
    export const GOM_PACCHIN = {
        EFFECT : "rubberBand",
        RATE : 2,
        MESSAGE: "　は　ゴムっぱちん　を　くりだした"
    }
    /**　回転アタック スキル */
    export const ROTATE_ATTACK = {
        EFFECT : "flip",
        RATE : 2,
        MESSAGE: "　の　トルネードせんぷうきゃく"
    }
}

/**
 * 定数
 * 若竹メンバー情報
 */
export namespace MEMBER{

    /**　金川 */
    export const KANAGAWA = {
        NAME: 'kngw',
        ICON: '/assets/pipo-enemy008.png',
        HIT_POINT: 10,
        SKILLS: [SKILL.MENDOI,SKILL.SPLASH]
    };
    /**　藤原 */
    export const FUJIWARA = {
        NAME: 'fuji',
        ICON: 'assets/pipo-enemy006.png',
        HIT_POINT: 10,
        SKILLS: [SKILL.BLOW,SKILL.ROTATE_ATTACK]
    };
    /**　初田 */
    export const HATSUDA = {
        NAME: 'tastu',
        ICON: '/assets/pipo-enemy025b.png',
        HIT_POINT: 10,
        SKILLS: [SKILL.GOM_PACCHIN,SKILL.MENDOI]
    };
    /**　伊藤 */
    export const ITO = {
        NAME: 'ito',
        ICON: '/assets/pipo-enemy014.png',
        HIT_POINT: 10,
        SKILLS: [SKILL.HEIGH_JUMP,SKILL.SENOBI]
    };
}

/**
 * 定数
 * 戦闘シーンアクション
 */
export namespace BATTLE_ACTION{
    /**　バトルフェイズ */
    export const PHAZE = {
        PLAYER_TURN : "player_turn",
        TARGET_SELECT: "target_select",
        ENEMY_TURN : "emeny_turn"
    }
    /**　アクション主体 */
    export const SUBJECT = {
        PLAYER : "player"
    }
    /**　アクション対象 */
    export const TARGET = {
        ALL : ""
    }
}
