export async function GET() {
    

    return Response.json({
        "applinks": {
            "apps": [],
            "details": [
                {
                    "appIDs": [
                        "M2UB5HZSBK.app.vmodel.social"
                    ],
                    "paths": [
                        "*"
                    ]
                }
            ]
        }
    })
}