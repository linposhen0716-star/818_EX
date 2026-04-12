document.addEventListener('DOMContentLoaded', () => {




        const container = document.getElementById('inventory-container');




        const addVendorBtn = document.getElementById('add-vendor-btn');




        const saveBtn = document.getElementById('save-btn');









        // 初始化廠商資料




        let vendorsData = [
                {
                        "id": "v_ext_1",
                        "name": "喬富-餅皮/麵包",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_2_1",
                                        "name": "乳酪餅(藍)-30片/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_2",
                        "name": "喬富-煎類",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_3_1",
                                        "name": "津-煎水餃約100顆/包",
                                        "stock": "",
                                        "sales": 120.9,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_3_2",
                                        "name": "菲力雞排35片/盒",
                                        "stock": "",
                                        "sales": 22.0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_3_3",
                                        "name": "東豪-燻雞肉片約22份/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_3_4",
                                        "name": "魔術牛肉堡排80克10片/包",
                                        "stock": "",
                                        "sales": 17.1,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_3_5",
                                        "name": "府-超好吃韓式雞腿堡12片/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_3_6",
                                        "name": "大-紐奧良腿排 10片/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_3",
                        "name": "喬富-炸物",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_4_1",
                                        "name": "漁-卡啦脆魚條 24份/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_4_2",
                                        "name": "東芳-小熱狗50支/包",
                                        "stock": "",
                                        "sales": 75.6,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_4_3",
                                        "name": "香雞堡20片/包",
                                        "stock": "",
                                        "sales": 16.6,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_4_4",
                                        "name": "紅龍-小巧雞球約18份/包",
                                        "stock": "",
                                        "sales": 81.5,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_4_5",
                                        "name": "全熟-香辣卡啦雞腿(紅)10入/包",
                                        "stock": "",
                                        "sales": 12.7,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_4_6",
                                        "name": "全熟-原味卡啦雞腿(紅)10入/包",
                                        "stock": "",
                                        "sales": 12.7,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_4_7",
                                        "name": "紅龍-香檸雞柳條  約10份/包",
                                        "stock": "",
                                        "sales": 38.6,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_4_8",
                                        "name": "L-日式雞排 10片/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_4_9",
                                        "name": "比利時脆薯2KG約17份/包",
                                        "stock": "",
                                        "sales": 18.2,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_4_10",
                                        "name": "鯡力魚堡20片/盒",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_4_11",
                                        "name": "卜-(原)無骨鹹酥雞 13份/包",
                                        "stock": "",
                                        "sales": 85.8,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_4_12",
                                        "name": "小肉豆蜜糖 約30份/包",
                                        "stock": "",
                                        "sales": 119.3,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_4_13",
                                        "name": "瓜瓜園-Q紫金地瓜球-20份/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_4_14",
                                        "name": "瓜瓜園-Q黃金地瓜球-20份/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_4",
                        "name": "喬富-配料",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_5_1",
                                        "name": "富達 玉米粒g 24罐 10份/罐",
                                        "stock": "",
                                        "sales": 2.3,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_5_2",
                                        "name": "喬富鮪魚三明治24罐 4份/罐",
                                        "stock": "",
                                        "sales": 10.1,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_5_3",
                                        "name": "藍帶<雙色>烘焙絲 約50份/包",
                                        "stock": "",
                                        "sales": 17.4,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_5_4",
                                        "name": "喬富伯爵紅茶-約65杯/包",
                                        "stock": "",
                                        "sales": 86.9,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_5_5",
                                        "name": "春芽青茶 約65/包",
                                        "stock": "",
                                        "sales": 31.6,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_5_6",
                                        "name": "(A)小貢丸 60粒/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_5_7",
                                        "name": "蟳管(蟹味棒)約56條/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_5_8",
                                        "name": "讚-鑫鑫腸-約120條/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_5_9",
                                        "name": "小紅莓(魚板)-約110條/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_5_10",
                                        "name": "府城-玉米濃湯-約24份/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_5_11",
                                        "name": "品皇-1號咖啡豆 約25份/包",
                                        "stock": "",
                                        "sales": 0.6,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_5",
                        "name": "喬富-醬類-統一1、0.5",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_6_1",
                                        "name": "喬富-A沙拉(白盒)",
                                        "stock": "",
                                        "sales": 31.8,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_6_2",
                                        "name": "千島醬-1斤",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_6_3",
                                        "name": "憶霖-塔塔醬",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_6_4",
                                        "name": "憶-蜂蜜芥末醬",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_6_5",
                                        "name": "覓-花生醬-得3kg",
                                        "stock": "",
                                        "sales": 17.5,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_6_6",
                                        "name": "覓-特級香濃巧克力3g",
                                        "stock": "",
                                        "sales": 35.4,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_6_7",
                                        "name": "(小)草莓醬-900g",
                                        "stock": "",
                                        "sales": 4.8,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_6_8",
                                        "name": "(小)藍莓醬-900g",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_6_9",
                                        "name": "(福)椰香奶酥-800g",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_6_10",
                                        "name": "(金)台灣凍蒜抹醬",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_6_11",
                                        "name": "藍莓乳酪 約500g",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_6_12",
                                        "name": "金鶴-綠茶抹醬 900g",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_6_13",
                                        "name": "醇瑪佳琳奶油 450g",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_6_14",
                                        "name": "(金)甜雞醬900ml",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_6",
                        "name": "喬富-麵類",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_7_1",
                                        "name": "珍-義大利醬 1份/包",
                                        "stock": "",
                                        "sales": 6.9,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_7_2",
                                        "name": "喬富-三杯雞醬 1份/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_7_3",
                                        "name": "吉-黑胡椒醬 1份/包",
                                        "stock": "",
                                        "sales": 17.7,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_7_4",
                                        "name": "吉-蘑菇醬 1份/包",
                                        "stock": "",
                                        "sales": 16.6,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_7_5",
                                        "name": "府-古早味肉燥 1份/包",
                                        "stock": "",
                                        "sales": 4.6,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_7_6",
                                        "name": "喬富-宮保雞丁 1份/包",
                                        "stock": "",
                                        "sales": 5.2,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_7_7",
                                        "name": "吉家-培根白醬 1份/包",
                                        "stock": "",
                                        "sales": 34.6,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_7_8",
                                        "name": "吉家-青醬 1份/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_7_9",
                                        "name": "聯-鐵板麵 1份/包",
                                        "stock": "",
                                        "sales": 39.0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_7_10",
                                        "name": "風-小烏龍 1份/包",
                                        "stock": "",
                                        "sales": 12.2,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_7_11",
                                        "name": "雞絲麵 50份/箱",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_7",
                        "name": "喬富-包材",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_8_1",
                                        "name": "白色-大圓匙 100個/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_8_2",
                                        "name": "白-90-500紙杯-50個/條",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_8_3",
                                        "name": "L型袋20cm(英文牛皮)100張/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_8_4",
                                        "name": "L袋(白)20cm郵報 100張/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_8_5",
                                        "name": "881-8兩防油紙袋 100張/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_8_6",
                                        "name": "881-6兩防油紙袋 100張/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_8_7",
                                        "name": "點心盒 100個/條",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_8_8",
                                        "name": "吐司盒(自扣)100個/條",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_8_9",
                                        "name": "黑-四杯架100個/條",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_8_10",
                                        "name": "單-黑色吸管6*18 250支/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_8_11",
                                        "name": "90筷子 約90雙/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_8_12",
                                        "name": "902扁碗(黃花)50個/條",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_8_13",
                                        "name": "165 平蓋50個/條",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_8_14",
                                        "name": "小一杯袋 約100個/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_8_15",
                                        "name": "水果叉 10包/？",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_8_16",
                                        "name": "無圖-封口膜-450mAP(共用) ？",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_8",
                        "name": "喬富-三角袋 ？",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_9_1",
                                        "name": "1000cc湯杯碗50個/條",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_9_2",
                                        "name": "850<蓋>(十)50入/條",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_9_3",
                                        "name": "紙粿盒 100個/條",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_9",
                        "name": "豆老爺",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_10_1",
                                        "name": "無糖豆漿 2500ml約5杯/包",
                                        "stock": "",
                                        "sales": 6.2,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_10_2",
                                        "name": "有糖豆漿 2500ml約5杯/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_10_3",
                                        "name": "南瓜豆漿 1.5杯/份",
                                        "stock": "",
                                        "sales": 10.1,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_10_4",
                                        "name": "黑芝麻堅果 1.5杯/份",
                                        "stock": "",
                                        "sales": 12.1,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_10",
                        "name": "開元",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_11_1",
                                        "name": "職人鮮奶 936ml 約9杯/瓶",
                                        "stock": "",
                                        "sales": 46.4,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_11_2",
                                        "name": "香草奶精水500ml 約16杯/瓶",
                                        "stock": "",
                                        "sales": 79.9,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_11_3",
                                        "name": "黃金雞塊  約15份/包",
                                        "stock": "",
                                        "sales": 123.7,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_11_4",
                                        "name": "可可亞約8杯/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_11_5",
                                        "name": "錫蘭紅茶 約16杯/包",
                                        "stock": "",
                                        "sales": 86.9,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_11",
                        "name": "憶家鄉",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_12_1",
                                        "name": "小肉盤 20粒/盤",
                                        "stock": "",
                                        "sales": 9.5,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_12_2",
                                        "name": "(憶)黑胡椒豬排15片/盒",
                                        "stock": "",
                                        "sales": 76.4,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_12_3",
                                        "name": "素火腿 約50片/條",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_12_4",
                                        "name": "紅燒牛肉 1份/包",
                                        "stock": "",
                                        "sales": 5.4,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_12_5",
                                        "name": "梅干扣肉 1份/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_12_6",
                                        "name": "羅漢素燴 1份/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_12",
                        "name": "IDEAHOUSE",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_13_1",
                                        "name": "16oz白咖啡杯 50個/條",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_13_2",
                                        "name": "粿盒 50個/條",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_13_3",
                                        "name": "90-12oz 中空雙層杯-50個/條",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_13_4",
                                        "name": "PP 咖啡杯蓋 - 透明 50個/條",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_13",
                        "name": "親民",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_14_1",
                                        "name": "可頌(大) 5顆/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_14_2",
                                        "name": "巧巴達 3顆/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_14_3",
                                        "name": "麥香堡 3顆/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_14",
                        "name": "塑膠袋 統一1、0.5",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_15_1",
                                        "name": "小粉袋 /包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_15_2",
                                        "name": "小黃袋 /包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_15_3",
                                        "name": "中綠袋 /包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_15_4",
                                        "name": "中橘袋 /包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_15_5",
                                        "name": "大粉袋 /包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_15",
                        "name": "鼎耀。統一1、0.5",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_16_1",
                                        "name": "鼎耀-前腿火鍋捲(前火捲)3K*2",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_16",
                        "name": "好市多",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_17_1",
                                        "name": "科克蘭希臘優格",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_17_2",
                                        "name": "台豬高津德式香腸20條/包",
                                        "stock": "",
                                        "sales": 17.1,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_17_3",
                                        "name": "8吋墨西哥薄餅皮30片/包",
                                        "stock": "",
                                        "sales": 5.1,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_17_4",
                                        "name": "五月花妙用衛生紙36包/袋",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_17_5",
                                        "name": "MARIANI葡萄乾",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_17_6",
                                        "name": "廚房紙巾160S/12R",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_17_7",
                                        "name": "KS抽取式衛生紙",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_17_8",
                                        "name": "PRIL小蘇打洗碗精",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_17_9",
                                        "name": "ALPHAMIC烹調紙",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_17_10",
                                        "name": "鋁箔紙",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_17_11",
                                        "name": "KS保鮮膜2入",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_17_12",
                                        "name": "CAMPFIRE棉花糖150顆/包",
                                        "stock": "",
                                        "sales": 21.0,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_17",
                        "name": "好市多-丸漢堡",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_18_1",
                                        "name": "鼎源白皮蛋餅皮30片/包",
                                        "stock": "",
                                        "sales": 146.7,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_18_2",
                                        "name": "厚切蔥抓餅-10片/包",
                                        "stock": "",
                                        "sales": 21.9,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_18_3",
                                        "name": "西班牙起司片-84片/條",
                                        "stock": "",
                                        "sales": 33.3,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_18_4",
                                        "name": "丸漢堡三層培根-約30片/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_18_5",
                                        "name": "泰式甜雞醬",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_18_6",
                                        "name": "丸漢堡大火腿-約120片/條",
                                        "stock": "",
                                        "sales": 13.3,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_18_7",
                                        "name": "擊掌四角薯餅-20片/條",
                                        "stock": "",
                                        "sales": 55.3,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_18_8",
                                        "name": "金梅油膏-4.5 公升",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_18",
                        "name": "好市多-野村",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_19_1",
                                        "name": "南洋果香咖哩雞 1份/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_19_2",
                                        "name": "迷迭香雞腿(生) 1支/包",
                                        "stock": "",
                                        "sales": 0,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_19",
                        "name": "好市多-蘿蔔糕",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_20_1",
                                        "name": "蘿蔔糕 16片/盤",
                                        "stock": "",
                                        "sales": 85.1,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_20",
                        "name": "好市多-大不同餐包",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_21_1",
                                        "name": "餐包18顆/包",
                                        "stock": "",
                                        "sales": 49.6,
                                        "suggested": ""
                                }
                        ]
                },
                {
                        "id": "v_ext_21",
                        "name": "好市多-威翰",
                        "isExpanded": false,
                        "products": [
                                {
                                        "id": "p_ext_22_1",
                                        "name": "吐司20片/條",
                                        "stock": "",
                                        "sales": 201.7,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_22_2",
                                        "name": "厚片10片/條",
                                        "stock": "",
                                        "sales": 12.2,
                                        "suggested": ""
                                },
                                {
                                        "id": "p_ext_22_3",
                                        "name": "漢堡 1顆/包",
                                        "stock": "",
                                        "sales": 42.3,
                                        "suggested": ""
                                }
                        ]
                }
        ];

        // 嘗試從 LocalStorage 載入先前存檔的資料
        const STORAGE_KEY = 'inventory_system_data';
        const cachedData = localStorage.getItem(STORAGE_KEY);
        if (cachedData) {
                try {
                        vendorsData = JSON.parse(cachedData);
                        console.log('✅ 已從本地儲存載入盤點資料');
                } catch (e) {
                        console.error('❌ 載入本地儲存失敗:', e);
                }
        }









        function renderAll() {




                container.innerHTML = '';




                vendorsData.forEach(vendor => {




                        const vendorEl = createVendorElement(vendor);




                        container.appendChild(vendorEl);




                });




        }









        function createVendorElement(vendor) {




                const groupDiv = document.createElement('div');




                groupDiv.className = 'vendor-group';




                groupDiv.dataset.id = vendor.id;









                // --- Vendor Header ---




                const headerDiv = document.createElement('div');




                headerDiv.className = `vendor-header ${vendor.isExpanded ? 'expanded' : ''}`;









                headerDiv.innerHTML = `




            <div class="vendor-title-wrapper">




                <span class="toggle-icon">▶</span>




                <input type="text" class="input-vendor-name" value="${vendor.name}" placeholder="輸入廠商名稱">




            </div>




            <div class="vendor-actions">




                <button class="add-product-btn">+ 加入品名</button>




                <button class="delete-vendor-btn" title="刪除整個廠商">✖</button>




            </div>




        `;









                // --- 廠商名稱保護邏輯 ---




                const vendorNameInput = headerDiv.querySelector('.input-vendor-name');




                let originalName = vendor.name;









                vendorNameInput.addEventListener('focus', (e) => {




                        originalName = e.target.value;




                });









                vendorNameInput.addEventListener('change', (e) => {




                        const newName = e.target.value;




                        if (newName !== originalName) {




                                if (confirm(`確定要將廠商名稱「${originalName}」改為「${newName}」嗎？`)) {




                                        originalName = newName;




                                        vendor.name = newName;




                                } else {




                                        e.target.value = originalName;




                                }




                        }




                });









                // --- Vendor Products Container ---




                const productsDiv = document.createElement('div');




                productsDiv.className = `vendor-products ${vendor.isExpanded ? 'expanded' : ''}`;









                const table = document.createElement('table');




                table.innerHTML = `




            <thead>




                <tr>




                    <th>品名</th>




                    <th>庫存</th>




                    <th>銷量</th>




                    <th>建議進貨量</th>




                    <th>刪除</th>




                </tr>




            </thead>




            <tbody></tbody>




        `;




                const tbody = table.querySelector('tbody');









                vendor.products.forEach(prod => {




                        tbody.appendChild(createProductRow(prod, vendor.products));




                });









                productsDiv.appendChild(table);




                groupDiv.appendChild(headerDiv);




                groupDiv.appendChild(productsDiv);









                // --- Event Listeners for Header ---




                const titleWrapper = headerDiv.querySelector('.vendor-title-wrapper');









                // Prevent toggle when clicking the input itself




                vendorNameInput.addEventListener('click', (e) => e.stopPropagation());









                titleWrapper.addEventListener('click', () => {




                        vendor.isExpanded = !vendor.isExpanded;




                        headerDiv.classList.toggle('expanded');




                        productsDiv.classList.toggle('expanded');




                });









                // Add Product




                headerDiv.querySelector('.add-product-btn').addEventListener('click', (e) => {




                        e.stopPropagation();




                        if (confirm(`確定要在「${vendor.name || '此廠商'}」底下新增一項全新的食材品項嗎？`)) {




                                if (!vendor.isExpanded) {




                                        vendor.isExpanded = true;




                                        headerDiv.classList.add('expanded');




                                        productsDiv.classList.add('expanded');




                                }




                                const newProduct = {




                                        id: 'p_' + Date.now(),




                                        name: '',




                                        stock: 0,




                                        sales: 0,




                                        suggested: 0,




                                        limit: 20




                                };




                                vendor.products.push(newProduct);




                                tbody.appendChild(createProductRow(newProduct));




                        }




                });









                // Delete Vendor




                headerDiv.querySelector('.delete-vendor-btn').addEventListener('click', (e) => {




                        e.stopPropagation();




                        if (confirm(`確定要將「${vendor.name || '此廠商'}」以及它底下所有的食材清單徹底刪除嗎？`)) {




                                const index = vendorsData.indexOf(vendor);
                                if (index > -1) {
                                    vendorsData.splice(index, 1);
                                }
                                groupDiv.remove();




                        }




                });









                return groupDiv;




        }









        function createProductRow(data, productsArray) {




                const tr = document.createElement('tr');




                tr.dataset.id = data.id;









                const stockVal = Number(data.stock) || 0;




                const salesVal = Number(data.sales) || 0;




                const diff = salesVal - stockVal;









                const calculateIdeal = (d) => {




                        if (d <= 0) return 0;




                        return Math.ceil(d * 2) / 2;




                };









                const suggestedPlaceholder = calculateIdeal(diff);














                tr.innerHTML = `




            <td><input type="text" class="input-product" value="${data.name}" placeholder="輸入唯一品名" ${data.name ? 'readonly' : ''}></td>




            <td class="col-num"><input type="number" class="input-stock" min="0" value="${data.stock}" placeholder="0"></td>




            <td class="col-num"><input type="number" class="input-sales" min="0" value="${data.sales}" placeholder="0"></td>




            <td class="col-num relative-cell">




                <input type="number" class="input-suggested" value="${data.suggested}" placeholder="" title="防呆上限: ${data.limit || 20}">




                <span class="suggested-hint">(${suggestedPlaceholder})</span>




            </td>




            <td>




                <button class="action-btn delete-btn" title="刪除品名">✖</button>




            </td>




        `;









                const nameInput = tr.querySelector('.input-product');
                nameInput.addEventListener('change', () => {
                        data.name = nameInput.value;
                });

                const stockInput = tr.querySelector('.input-stock');




                const salesInput = tr.querySelector('.input-sales');




                const suggestedInput = tr.querySelector('.input-suggested');




                const hintLabel = tr.querySelector('.suggested-hint');









                const updateState = () => {




                        const rawStock = stockInput.value;




                        const rawSales = salesInput.value;









                        if (rawStock !== '' && Number(rawStock) < 0) stockInput.value = 0;




                        if (rawSales !== '' && Number(rawSales) < 0) salesInput.value = 0;









                        const currentStock = stockInput.value === '' ? null : Number(stockInput.value);
                        const currentSales = salesInput.value === '' ? null : Number(salesInput.value);

                        // 同步資料回物件
                        data.stock = currentStock;
                        data.sales = currentSales;


                        // 1. 漏填提醒邏輯




                        const isPartiallyFilled = (stockInput.value !== '' && salesInput.value === '') || (stockInput.value === '' && salesInput.value !== '');




                        if (isPartiallyFilled) {




                                if (stockInput.value === '') stockInput.classList.add('missing-input');




                                else stockInput.classList.remove('missing-input');




                                if (salesInput.value === '') salesInput.classList.add('missing-input');




                                else salesInput.classList.remove('missing-input');




                        } else {




                                stockInput.classList.remove('missing-input');




                                salesInput.classList.remove('missing-input');




                        }









                        // 2. 超大數值提醒 (動態防呆閥值) - 僅套用於建議進貨量




                        const limit = data.limit || 20;









                        // 3. 一致性與動態上限檢查




                        const suggestedValue = suggestedInput.value === '' ? null : Number(suggestedInput.value);
                        data.suggested = suggestedValue;




                        const diff = (currentSales || 0) - (currentStock || 0);




                        const idealRestock = calculateIdeal(diff);














                        if (suggestedValue !== null && (suggestedValue !== idealRestock || suggestedValue > limit)) {




                                suggestedInput.classList.add('warning-large');




                        } else {




                                suggestedInput.classList.remove('warning-large');




                        }









                        hintLabel.textContent = `(${idealRestock})`;









                        // 警示燈聯動 (warning-state)




                        if (idealRestock > 0 && (suggestedValue === null || suggestedValue < idealRestock)) {




                                tr.classList.add('warning-state');




                        } else {




                                tr.classList.remove('warning-state');




                        }









                        // 向上聯動標題




                        const groupDiv = tr.closest('.vendor-group');




                        if (groupDiv) {




                                const header = groupDiv.querySelector('.vendor-header');




                                const needsAttention = groupDiv.querySelectorAll('.missing-input, .warning-large, .warning-state').length > 0;




                                if (needsAttention) header.classList.add('vendor-error');




                                else header.classList.remove('vendor-error');




                        }




                };









                const normalizeInput = (input) => {




                        if (input.value !== '') {




                                input.value = Number(input.value);




                        }




                        updateState();




                };









                stockInput.addEventListener('input', updateState);




                salesInput.addEventListener('input', updateState);




                suggestedInput.addEventListener('input', updateState);




                stockInput.addEventListener('blur', () => normalizeInput(stockInput));




                salesInput.addEventListener('blur', () => normalizeInput(salesInput));




                suggestedInput.addEventListener('blur', () => normalizeInput(suggestedInput));









                // Delete Row




                tr.querySelector('.delete-btn').addEventListener('click', () => {




                        if (confirm(`確定要刪除「${tr.querySelector('.input-product').value || '此品項'}」嗎？`)) {




                                if (productsArray) {
                                    const index = productsArray.indexOf(data);
                                    if (index > -1) {
                                        productsArray.splice(index, 1);
                                    }
                                }
                                tr.remove();




                                // 也要同步檢查標題紅燈




                                const dummyUpdate = document.createElement('tr');




                                tr.parentNode.appendChild(dummyUpdate);




                                dummyUpdate.remove();




                        }




                });









                // 命名後自動鎖定
                nameInput.addEventListener('blur', () => {




                        if (nameInput.value !== '') nameInput.readOnly = true;




                });









                // 初始化檢查




                updateState();









                return tr;




        }









        // --- Global Actions ---




        addVendorBtn.addEventListener('click', () => {




                if (confirm('確定要手動新增一個全新的廠商收納類別嗎？')) {




                        const newVendor = {




                                id: 'v_' + Date.now(),




                                name: '',




                                isExpanded: true,




                                products: []




                        };




                        vendorsData.push(newVendor);
                        const vendorEl = createVendorElement(newVendor);
                        container.appendChild(vendorEl);




                        setTimeout(() => {




                                vendorEl.querySelector('.input-vendor-name').focus();




                        }, 50);




                }




        });









        saveBtn.addEventListener('click', () => {




                const missingCount = document.querySelectorAll('.missing-input').length;




                const warningCount = document.querySelectorAll('.warning-large').length;









                if (missingCount > 0 || warningCount > 0) {




                        const goAhead = confirm(`⚠ 盤點檢查報告：\n- 漏填欄位：${missingCount} 個\n- 數值異常：${warningCount} 個\n\n確定要以此狀態直接存檔嗎？`);




                        if (!goAhead) return;




                }









                // 1. 儲存至瀏覽器本地空間
                localStorage.setItem(STORAGE_KEY, JSON.stringify(vendorsData));

                // 2. 匯出 Excel (.xlsx) 檔案
                try {
                        const date = new Date().toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
                        const fileName = `818_進貨清單_${date}.xlsx`;

                        // 準備資料：將巢狀結構轉換為二維陣列（表格型態）
                        const exportData = [['廠商名稱', '品名規格', '目前庫存', '最近一週銷售(耗用)', '建議進貨數量']];
                        
                        vendorsData.forEach(vendor => {
                                vendor.products.forEach(product => {
                                        exportData.push([
                                                vendor.name,
                                                product.name,
                                                product.stock || '',
                                                product.sales || 0,
                                                product.suggested || ''
                                        ]);
                                });
                        });

                        // 建立工作表 (Worksheet)
                        const ws = XLSX.utils.aoa_to_sheet(exportData);
                        
                        // 建立工作簿 (Workbook)
                        const wb = XLSX.utils.book_new();
                        XLSX.utils.book_append_sheet(wb, ws, "進貨清單");

                        // 執行下載
                        XLSX.writeFile(wb, fileName);
                        
                        alert(`🎉 存檔成功！\n\n1. 資料已儲存至瀏覽器 (下次開啟自動載入)\n2. Excel 表格已匯出：${fileName}`);
                } catch (err) {
                        console.error('匯出 Excel 失敗:', err);
                        alert('🎉 盤點資料已儲存至瀏覽器！\n(但匯出 Excel 時發生錯誤，請檢查主控台)');
                }




        });









        // 初始渲染




        renderAll();




});




