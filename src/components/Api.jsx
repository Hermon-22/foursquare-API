function Api({searchList,userClick,userInput}){
    return (
        <div className="d-flex justify-content-center abc">
            <div className='inputDiv'>
                <input type="text"placeholder="zoek amsterdam" onChange={userInput} name='food'/>
                <button type="submit"className="btn btn-primary" onClick={userClick}>search</button>
            </div>
            <div>
                <ol>
                    {searchList.map((m)=>{
                        return (<h5 key={m.id}> <li> {m.name} </li></h5>)
                    })}
                </ol>  
            </div>
        </div>
    )
    }
export default Api
