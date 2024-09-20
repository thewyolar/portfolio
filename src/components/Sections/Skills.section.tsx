import {useTranslation} from "next-i18next";

const Skills = () => {
    const { t } = useTranslation();
    const more: string[] = Object.values(t('skills.more.data', { returnObjects: true })).map(value => String(value));
    const data: string[] = Object.values(t('skills.data', { returnObjects: true })).map(value => String(value));

    return (
        <div className="my-16 px-3 font-sen text-white" id="skills">
            <div className="flex items-center mb-8">
                <p className="text-3xl font-bold text-white">{t('skills.title')}</p>
                <div className="flex-grow border-t border-white ml-4"></div>
            </div>

            <div className="flex flex-wrap gap-3">
                {data.map((skill: string) => (
                    <div key={skill} className="inline-flex border border-lightText px-2 py-1 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <span className="text-lg text-slate-300">{skill}</span>
                    </div>
                ))}
            </div>

            <p className="text-lg font-medium text-slate-300 mt-8">
                {t('skills.more.common')}{" "}
                {more.map((skill: string, index: number) => (
                    <span key={skill} className="text-white">{skill}{index !== more.length - 1 && ", "}</span>
                ))}
            </p>
        </div>
    );
};

export default Skills;
