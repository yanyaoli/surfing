if ($response.body) {
    $done({
        body: JSON.stringify({
            "product_infos": [{
                "product_id": "5310897792128633390",
                "start_time": 1417260485,
                "end_time": 4092599349,
                "buy_time": "1417260485",
                "cluster": "offlinedl",
                "detail_cluster": "offlinedl",
                "product_name": "gz_telecom_exp"
            }, {
                "product_name": "svip2_nd",
                "product_description": "超级会员",
                "function_num": 0,
                "start_time": 1553702399,
                "buy_description": "",
                "buy_time": 0,
                "product_id": "1",
                "auto_upgrade_to_svip": 0,
                "end_time": 4092599349,
                "cluster": "vip",
                "detail_cluster": "svip",
                "status": 0
            }],
            "currenttime": 1573473597,
            "reminder": {
                "reminderWithContent": [],
                "advertiseContent": []
            },
            "request_id": 7501873289383874371
        })
    });
} else {
    $done({});
}
