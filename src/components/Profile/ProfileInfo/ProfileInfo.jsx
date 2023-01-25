import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.content__img}>
                <img alt="Japan"
                     src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            </div>
            <div className={styles.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;