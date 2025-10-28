'use server';

type ActionData = {
    [key: string]: string
}

export async function editProductAction(prodId: string, prevState: ActionData, formData: FormData) {
    const jwtToken = formData.get('token')?.toString() ?? ''
    formData.delete('token')

    const res = await fetch(
        process.env.ORIGIN + '/api/admin/products/edit/' + prodId,
        {
            method: 'PUT',
            body: formData,
            headers: {
                'Authorization': jwtToken
            }
        }
    )
    console.log('__________________________')
    console.log('YOU ARE HERE')

    return {}
}