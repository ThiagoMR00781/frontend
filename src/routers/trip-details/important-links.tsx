import { Plus } from "lucide-react"
import { Button } from "../../components/button"
import { useState } from "react"
import { CreateLinkModal } from "./create-link-modal"
import { Links } from "./links"

export const ImportantLinks = () => {
    const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false)

    const openCreateLinkModal = () => {
        setIsCreateLinkModalOpen(true)
    }

    const closeCreateLinkModal = () => {
        setIsCreateLinkModalOpen(false)
    }

    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links Importantes</h2>
            
            <Links/>

            <Button onClick={openCreateLinkModal} variant="secondary" size="full">
                <Plus className="size-5" />
                Cadastrar novo link
            </Button>

            {isCreateLinkModalOpen && (
                <CreateLinkModal
                closeCreateLinkModal={closeCreateLinkModal}/>
            )}
        </div>
    )
}