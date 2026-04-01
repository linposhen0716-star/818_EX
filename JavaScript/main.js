document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('inventory-container');
    const addVendorBtn = document.getElementById('add-vendor-btn');
    const saveBtn = document.getElementById('save-btn');

    // 初始化廠商資料
        let vendorsData = [
        {
            id: 'v_qf_bread',
            name: '喬富 (餅皮/麵包)',
            isExpanded: true,
            products: [
                { id: 'p_qfb_1', name: '滿福堡 20粒/包', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfb_2', name: '乳酪餅(藍)30入', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfb_3', name: '厚-原味(白)蛋餅皮30片', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfb_4', name: '川吉-原味抓餅10片', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfb_5', name: '丹麥堡', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_qf_煎類',
            name: '喬富 (煎類)',
            isExpanded: false,
            products: [
                { id: 'p_qfp_1', name: '蜜汁燒肉約12份', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfp_2', name: '津-煎水餃約100入', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfp_3', name: '菲力雞排35片', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfp_4', name: '兆擎-大火腿3kg-120片', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfp_5', name: '東豪-燻雞肉片約22份', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfp_6', name: '魔術牛肉堡排80克10片', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfp_7', name: '府-超好吃韓式雞腿堡12片', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfp_8', name: '卜蜂-特A培根-台灣豬 1kg', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfp_9', name: '東豪-優質培根 30條', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfp_10', name: '大-紐奧良腿排 10片', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_qf_炸物',
            name: '喬富 (炸物)',
            isExpanded: false,
            products: [
                { id: 'p_qfd_1', name: '漁-卡啦脆魚條 KG/盒*12', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfd_2', name: '東芳-50支小熱狗', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfd_3', name: '香雞堡20片', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfd_4', name: '紅龍-小巧雞球約18份', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfd_5', name: '全熟-香辣卡啦雞腿(紅)10入', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfd_6', name: '全熟-原味卡啦雞腿(紅)10入', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfd_7', name: '紅龍-香檸雞柳條 約10份', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfd_8', name: 'L-日式雞排 1片', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfd_9', name: '比利時脆薯2KG約17份', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfd_10', name: '紅龍-四角薯餅-20片', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfd_11', name: '鯡力魚堡20片', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfd_12', name: '卜-(原)無骨鹹酥雞-1kg13包', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfd_13', name: '微笑薯餅約13份', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfd_14', name: '小肉豆蜜糖 KG/包', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfd_15', name: 'X0036-起司薯球1kg15份', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfd_16', name: '瓜瓜園-Q紫金地瓜球-1.8kg', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfd_17', name: '瓜瓜園-Q黃金地瓜球-1.8kg', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfd_18', name: '魷米花-約1000g(約10份)', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfd_19', name: '泉橋-鱈魚條 約20條 600g', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_q_配料',
            name: '喬富 (配料)',
            isExpanded: false,
            products: [
                { id: 'p_qfa_1', name: '富達 玉米粒g 24罐', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfa_2', name: '喬富鮪魚三明治24罐', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfa_3', name: '藍帶<雙色>烘焙絲', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfa_4', name: '喬富伯爵紅茶-10入', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfa_5', name: '春芽青茶 25g 24入', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfa_6', name: '切達起司 84片', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfa_7', name: '(A)小貢丸 60粒/5斤/包*4 慶豐', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfa_8', name: '蟳管(蟹味棒)5斤/包', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfa_9', name: '讚-鑫鑫腸-1KG/包*15', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfa_10', name: '小紅莓(魚板)-5斤/包', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfa_11', name: '府城-玉米濃湯-250g/包*24', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfa_12', name: '<自用>肉鬆-細(紅A)1斤', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfa_13', name: '克隆-玉米粒340g易開24入', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfa_14', name: '<自用>預-冰烤地瓜(60)3kg 瓜瓜園', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfa_15', name: '品皇-1號咖啡豆-1磅/包', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_q_醬類',
            name: '喬富 (醬類)',
            isExpanded: false,
            products: [
                { id: 'p_qfs_1', name: '喬富-A沙拉(白盒)', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfs_2', name: '千島醬-1斤', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfs_3', name: '憶霖-塔塔醬', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfs_4', name: '憶-蜂蜜芥末醬', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfs_5', name: '覓-花生醬-得3kg', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfs_6', name: '覓-特級香濃巧克力3g', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfs_7', name: '(小)草莓醬-900g', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfs_8', name: '(小)藍莓醬-900g', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfs_9', name: '(福)椰香奶酥-800g', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfs_10', name: '(金)台灣凍蒜抹醬', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfs_11', name: '藍莓乳酪 約500g', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfs_12', name: '金饒-綠茶抹醬 900g', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfs_13', name: '醇瑪佳琳奶油 450g', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfs_14', name: '(金)甜雞醬900ml', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_q_麵類',
            name: '喬富 (麵類)',
            isExpanded: false,
            products: [
                { id: 'p_qfn_1', name: '珍-義大利醬', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfn_2', name: '喬富-三杯雞醬', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfn_3', name: '吉-黑胡椒醬', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfn_4', name: '吉-蘑菇醬', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfn_5', name: '府-古早味肉燥', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfn_6', name: '喬富-宮保雞丁', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfn_7', name: '吉家-培根白醬', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfn_8', name: '吉家-青醬', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfn_9', name: '聯-鐵板麵', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfn_10', name: '風-小烏龍', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfn_11', name: '雞絲麵65 g/50入/箱(福慧)', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfn_12', name: '合-咖哩醬', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfn_13', name: '上群-沙茶肉醬包', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_q_包材',
            name: '喬富 (包材)',
            isExpanded: false,
            products: [
                { id: 'p_qfc_1', name: '白色-大圓匙 100入', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_2', name: '白-90-500紙杯-50入/20條 LS', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_3', name: '30*30cm牛皮郵報漢堡紙/500入', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_4', name: 'L型袋20cm(英文牛皮)100入/包', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_5', name: 'L袋(白)20cm郵報/50束/5000張', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_6', name: '881-8兩防油紙袋/50束/5000張', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_7', name: '881-6兩防油紙袋/50束/5000張', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_8', name: '點心盒100入白', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_9', name: '吐司盒(自扣)100個', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_10', name: '黑-四杯架100入', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_11', name: '單-黑色吸管6*18 250*20包/箱', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_12', name: '90筷子 約90雙/包 30包/袋', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_13', name: '902扁碗(黃花)50入', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_14', name: '165 平蓋50入', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_15', name: '小一杯袋', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_16', name: '沙拉麵包盒', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_17', name: '水果叉 10包/50盒/箱', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_18', name: '無圖-封口膜-450mAP(共用)', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_19', name: '三角袋', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_20', name: '1000cc湯杯碗50入', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_21', name: '850<蓋>(十)50入/12條', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qfc_22', name: '紙粿盒 100個', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_豆老爺',
            name: '豆老爺',
            isExpanded: false,
            products: [
                { id: 'p_dl_1', name: '無/有糖豆漿 2500ml約5杯', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_dl_2', name: '米漿 2500ml約5杯', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_dl_3', name: '南瓜豆漿', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_dl_4', name: '燕麥薏仁', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_dl_5', name: '黑芝麻堅果', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_好市多',
            name: '好市多',
            isExpanded: false,
            products: [
                { id: 'p_cs_1', name: '科克蘭希臘優格', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_cs_2', name: '經典水煮貝果12入', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_cs_3', name: '台豬高津德式香腸', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_cs_4', name: '8吋墨西哥薄餅皮', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_cs_5', name: '五月花妙用衛生紙', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_cs_6', name: 'MARIANI葡萄乾', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_cs_7', name: '廚房紙巾', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_cs_8', name: 'KS抽取式衛生紙', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_cs_9', name: '小蘇打洗碗精', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_cs_10', name: 'ALPHAmic烹調紙', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_cs_11', name: 'KS強效洗衣膠囊', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_cs_12', name: 'KS晶亮洗碗精', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_cs_13', name: '鋁箔紙', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_cs_14', name: '保鮮膜', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_cs_15', name: '棉花糖約150顆(大)', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_cs_16', name: '草莓牛奶巧克力脆片', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_開元',
            name: '開元',
            isExpanded: false,
            products: [
                { id: 'p_ky_1', name: '職人鮮奶 936ml', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_ky_2', name: '香草奶精水500ml', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_ky_3', name: '黃金雞塊 約15份', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_ky_4', name: '可可亞約8杯', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_ky_5', name: '錫蘭紅茶/30+5盒/24包', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_ky_6', name: '璞珞咖啡 嚴選-經典風味454g', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_ky_7', name: '璞珞咖啡 嚴選-藍山風味454g', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_憶家鄉',
            name: '憶家鄉',
            isExpanded: false,
            products: [
                { id: 'p_yjx_1', name: '小肉盤20粒', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_yjx_2', name: '(憶)黑胡椒豬排15入', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_yjx_3', name: '麥火腿50片', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_yjx_4', name: '紅燒牛肉', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_yjx_5', name: '梅干扣肉', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_yjx_6', name: '羅漢素燴', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_yjx_7', name: '玉米濃湯包700g', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_yjx_8', name: '小芋頭包30粒', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_yjx_9', name: '小奶黃包30粒', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_yjx_10', name: '日式唐揚雞塊1kg包', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_yjx_11', name: '起司雞排/豬排 10 片', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_yjx_12', name: '檸檬二節翅約12支', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_yjx_13', name: '預炸蝦球500g/包', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_丸漢堡',
            name: '丸漢堡',
            isExpanded: false,
            products: [
                { id: 'p_m_1', name: '丸漢堡莫里西斯雞腿排-10片(箱/10包)', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_m_2', name: '鼎源白皮蛋餅皮30片', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_m_3', name: '厚切蔥抓餅-10片(箱/10包)', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_m_4', name: '丸漢堡三層培根-1kg(箱/12包)', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_m_5', name: '台式菠蘿堡', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_m_6', name: '甜雞醬', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_m_7', name: '香雞城小肉豆約300顆', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_m_8', name: '西班牙起司片-84片', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_m_9', name: '丸漢堡大火腿-5斤(箱/5條)', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_野村',
            name: '野村',
            isExpanded: false,
            products: [
                { id: 'p_n_1', name: '南洋果香咖哩雞', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_n_2', name: '迷迭香雞腿(生)', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_蘿蔔糕',
            name: '蘿蔔糕',
            isExpanded: false,
            products: [
                { id: 'p_rbg_1', name: '蘿蔔糕', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_大不同餐包',
            name: '大不同餐包',
            isExpanded: false,
            products: [
                { id: 'p_dbt_1', name: '餐包18顆', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_威翰',
            name: '威翰',
            isExpanded: false,
            products: [
                { id: 'p_wh_1', name: '吐司20片', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_wh_2', name: '厚片10片', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_wh_3', name: '漢堡', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_IDEAHOUSE',
            name: 'IDEAHOUSE',
            isExpanded: false,
            products: [
                { id: 'p_ih_1', name: '16oz白咖啡杯', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_ih_2', name: '粿盒900入', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_鼎耀',
            name: '鼎耀',
            isExpanded: false,
            products: [
                { id: 'p_dy_1', name: '鼎耀-前腿火鍋捲(前火捲)3K*2', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_親民',
            name: '親民',
            isExpanded: false,
            products: [
                { id: 'p_qm_1', name: '墨魚堡', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qm_2', name: '可頌(大)', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qm_3', name: '巧巴達', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qm_4', name: '丹麥吐司切4片', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_qm_5', name: '麥香堡', stock: 0, sales: 0, suggested: 0 }
            ]
        },
        {
            id: 'v_南北貨',
            name: '南北貨',
            isExpanded: false,
            products: [
                { id: 'p_nbh_1', name: '蜂蜜', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_nbh_2', name: '耐炸油', stock: 0, sales: 0, suggested: 0 },
                { id: 'p_nbh_3', name: '沙拉脫', stock: 0, sales: 0, suggested: 0 }
            ]
        }
    ];

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
            tbody.appendChild(createProductRow(prod));
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
                    suggested: 0
                };
                vendor.products.push(newProduct);
                tbody.appendChild(createProductRow(newProduct));
            }
        });

        // Delete Vendor
        headerDiv.querySelector('.delete-vendor-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm(`確定要將「${vendor.name || '此廠商'}」以及它底下所有的食材清單徹底刪除嗎？`)) {
                groupDiv.remove();
            }
        });

        return groupDiv;
    }

    function createProductRow(data) {
        const tr = document.createElement('tr');
        tr.dataset.id = data.id;

        const stockVal = Number(data.stock) || 0;
        const salesVal = Number(data.sales) || 0;
        const suggestedPlaceholder = Math.max(0, salesVal - stockVal);

        tr.innerHTML = `
            <td><input type="text" class="input-product" value="${data.name}" placeholder="輸入唯一品名" ${data.name ? 'readonly' : ''}></td>
            <td class="col-num"><input type="number" class="input-stock" min="0" value="${data.stock}" placeholder="0"></td>
            <td class="col-num"><input type="number" class="input-sales" min="0" value="${data.sales}" placeholder="0"></td>
            <td class="col-num relative-cell">
                <input type="number" class="input-suggested" value="${data.suggested}" placeholder="">
                <span class="suggested-hint">(${suggestedPlaceholder})</span>
            </td>
            <td>
                <button class="action-btn delete-btn" title="刪除品名">✖</button>
            </td>
        `;

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

            // 2. 超大數值提醒
            if (currentStock !== null && currentStock > 100) stockInput.classList.add('warning-large');
            else stockInput.classList.remove('warning-large');
            if (currentSales !== null && currentSales > 100) salesInput.classList.add('warning-large');
            else salesInput.classList.remove('warning-large');

            // 3. 一致性檢查
            const suggestedValue = suggestedInput.value === '' ? null : Number(suggestedInput.value);
            const idealRestock = Math.max(0, (currentSales || 0) - (currentStock || 0));

            if (suggestedValue !== null && suggestedValue !== idealRestock) {
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
                tr.remove();
                // 也要同步檢查標題紅燈
                const dummyUpdate = document.createElement('tr');
                tr.parentNode.appendChild(dummyUpdate);
                dummyUpdate.remove(); 
            }
        });

        // 命名後自動鎖定
        const nameInput = tr.querySelector('.input-product');
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

        console.log('Saving inventory...', vendorsData);
        alert('🎉 盤點資料已順利存檔！');
    });

    // 初始渲染
    renderAll();
});
