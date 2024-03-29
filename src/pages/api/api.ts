type Props = {
    params: any
}

export async function get({ params }: Props) {
    const id = params.id;
    const product = {id};

    if (!product) {
        return new Response(null, {
            status: 404,
            statusText: 'Not found'
        });
    }

    return new Response(JSON.stringify(product), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}
