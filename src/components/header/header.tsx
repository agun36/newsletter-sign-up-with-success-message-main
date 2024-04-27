import desktopIllustration from '../../assets/images/illustration-sign-up-desktop.svg';
import mobileIllustration from '../../assets/images/illustration-sign-up-mobile.svg';

export const Header = () => {

    return (
        <header>
            <picture>
                <source srcSet={desktopIllustration} media="(min-width: 768px)" />
                <img src={mobileIllustration} alt="sign up illustration" className='img-fluid w-100' />
            </picture>
        </header>
    )
}