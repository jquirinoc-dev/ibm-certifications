import './styles/AdminConsole.css'
import { UpdateCertifications } from './Components/UpdateCertifications'
import { CreateUser } from './Components/CreateUser'
import { ChangeUserPermissions } from './Components/ChangeUserPermissions'
import { UploadCertificationsFile } from './Components/UploadCertificationsFile'

export const AdminConsole = () => {
  return (
    <div className="admin-console-wrapper">
        {/* <UpdateCertifications /> */}
        <CreateUser />
        <ChangeUserPermissions />
        <UploadCertificationsFile />
    </div>
  )
}
