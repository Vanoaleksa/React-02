import s from './Profileinfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.content}>
            <div>
                <img className='stadiumimg'  src='https://image.winudf.com/v2/image/Y29tLk1hcnlUb3JvLkNhbXBOb3UzNjBWUldhbGxwYXBlcnNIRF9zY3JlZW5fNV90ZDJ4aXBtZw/screen-5.jpg?fakeurl=1&type=.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava +description
        </div>
        </div>
    )
}

export default ProfileInfo;