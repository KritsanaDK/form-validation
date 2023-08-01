import React from 'react'
import './FormCompoment.css'
import { useState } from 'react'

const FormCompoments = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    return (
        <div className='container'>
            <form className='form'>
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className='form-control'>
                    <label> ชื่อผู้ใช้</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <small>error message</small>
                </div>

                <div className='form-control'>
                    <label> อีเมลล์</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <small>error message</small>
                </div>

                <div className='form-control'>
                    <label> รหัสผ่าน</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <small>error message</small>
                </div>

                <div className='form-control'>
                    <label> ยืนยันรหัวผ่าน</label>
                    <input type="text" value={repassword} onChange={(e) => setRepassword(e.target.value)} />
                    <small>error message</small>
                </div>

                <div className='form-control'>
                    <button type='submit'>ลงทะเบียน</button>
                </div>



            </form>

        </div>
    )
}

export default FormCompoments

