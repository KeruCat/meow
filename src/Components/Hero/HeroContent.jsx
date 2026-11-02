import HeroAction from "./HeroActions";

function HeroContent({ 
    label, 
    title, 
    description,
}) {
    return (
        <div>
            <p>{label}</p>

            <h1>{title}</h1>

            <p>{description}</p>

            <HeroAction />
        </div>
    );
}

export default HeroContent;