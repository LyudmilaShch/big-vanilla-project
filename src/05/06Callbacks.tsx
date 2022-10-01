import React, {ChangeEvent, MouseEvent} from 'react';

/*const callback = (): number => {
    alert('hey')
    return 12
}
window.setTimeout(callback, 1000)*/

export const User = () => {

    const search = (event: MouseEvent<HTMLButtonElement>) => {

        //alert('user have been deleted');
    }
/*    const saveUser = () => {
        alert('user have been saved');
    }*/
    const onNameChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log('name changed' + event.currentTarget.value)
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('name changed' + event.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }


    return (
        <div>
            <textarea
                onChange={onNameChanged}
                onBlur={focusLostHandler}
            > Lyuda </textarea>
            <input onChange={onAgeChanged}/>
            <button name="delete" onClick={search}>search</button>
           {/* <button name="save" onClick={deleteUser}>x</button>*/}
        </div>
    )
}