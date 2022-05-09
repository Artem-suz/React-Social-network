import s from './Users.module.css'
import User from './User/User'
import Paginator from '../common/Paginator/Paginator'


const Users = (props) => {
    

    return (
        <div className={s.pageUsersWrapper}>
                
                {
                    props.users.map((u) => {
                        return (
                                    <User id = {u.id} key = {u.id}  
                                    followed={u.followed}  name={u.name} 
                                    status={u.status} location={u.location} photo={u.photos} 
                                    followingInProgress= {props.followingInProgress}
                                    follow={props.follow} unfollow={props.unfollow}
                                    isAuth={props.isAuth}
                                    />
                            
                        )
                    })
                }

                <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                  currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
                
        </div>
    )
}

export default Users