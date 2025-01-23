export enum journeyType {
    education,
    job,
    startup
}

export namespace journeyType {
    export const getDisplayName = (type: journeyType) => {
        switch (type) {
            case journeyType.education:
                return "Education";
            case journeyType.job:
                return "Work Experience";
            case journeyType.startup:
                return "Startup";
        }
    }

    export const getIcon = (type: journeyType) => {
        switch (type) {
            case journeyType.education:
                return "icons/education.png";
            case journeyType.job:
                return "icons/work-experience.png";
            case journeyType.startup:
                return "icons/startup.png";
        }
    }
}