'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ac5f46fa43eed85d739f2133ae8b7f46",
"assets/AssetManifest.bin.json": "251d6683f570a243ac489141f3171b55",
"assets/AssetManifest.json": "2af5b936befce37e11379254b65c5a04",
"assets/assets/images/apartmentIcon.svg": "710da0379f23d29b0c8d4bf815d481ed",
"assets/assets/images/arrows.svg": "5fb68c294e6474ea5eac307b9a8d9e88",
"assets/assets/images/assigningADriver.svg": "c70b94b5c66dfbc322179c2ed6db8ab5",
"assets/assets/images/assigningADriver1.svg": "4d3a017381941aa4aeee59a8edab08f1",
"assets/assets/images/assigningDriver.json": "c51e860b38bfc0d15faac0278ef03f8a",
"assets/assets/images/bagImage.svg": "eaf6c4f1f53dcb63edc25c6b7b28374a",
"assets/assets/images/bike_icon.png": "930c8eb1b32272cf6e065e4043ec1039",
"assets/assets/images/bike_icon_ios.png": "5b344962a3e67b44a7017747b6f06ab5",
"assets/assets/images/bottom_sheet_tap.png": "64a299c04220afed211acc248b926746",
"assets/assets/images/call_icon.png": "08b287bf27f05ae796d5f8d1ce982c0c",
"assets/assets/images/call_icon_new.png": "d4f0330c36c815fd07f9013890946d15",
"assets/assets/images/chat_icon.png": "73c802cf848626683a9ab71582eccfb6",
"assets/assets/images/closedVendorStore.png": "04d0d474ab4451f032e7a6794f4e2ecc",
"assets/assets/images/closedVendorStore.svg": "5e2998e76b8fc0b9b904ec34661362dc",
"assets/assets/images/close_button.png": "be9d72fc2341d6d65af641976db36ac4",
"assets/assets/images/customer_service.svg": "fd176724d8297741bb714614c858895f",
"assets/assets/images/delivered.png": "32ecff5c815294dbd6e3a49276c7f9f5",
"assets/assets/images/delivered.svg": "a4ae6b0890a05970da6b3e38d803bd01",
"assets/assets/images/deliveryMan.png": "815a65d1bd79419fa7d4447ba1918a25",
"assets/assets/images/facebook.svg": "badc3e14902c571ea19f9689d10eee99",
"assets/assets/images/filterIcon.svg": "7fa70914b3689507f4bfd95f8cd09ac8",
"assets/assets/images/getto_logo.png": "60b424a2f695a4d923db533154d0b91e",
"assets/assets/images/getto_logo_v2.png": "f1b798d1dda8c91c79ee1cfcac73e612",
"assets/assets/images/homeIcon.svg": "338cede5f2449e122fe58f450c4660be",
"assets/assets/images/ic_accessories.png": "a4a6e675b0f09353eff74c3ffab5d53a",
"assets/assets/images/ic_account.svg": "1f88a6b243af7759e240ea9f953e051b",
"assets/assets/images/ic_active_wear.png": "e6940830f17f92a0ce049762c984b136",
"assets/assets/images/ic_address_apartment.svg": "858bb97d8e26fef971f4e15496e540c9",
"assets/assets/images/ic_address_home.svg": "338cede5f2449e122fe58f450c4660be",
"assets/assets/images/ic_address_hotel.svg": "534ba637f78b9fa4d63b6bab6df1e5c7",
"assets/assets/images/ic_address_office.svg": "bec6c20838804ce6c2c8dcfcc39efe11",
"assets/assets/images/ic_adidas.png": "c1473e036c2128b7b28e6e5003c54156",
"assets/assets/images/ic_allen_solly.png": "ed42c95526551dc7c317b143f2200df8",
"assets/assets/images/ic_apple_logo.svg": "f223cca86b6cfc7a4f9e1af64b4452bc",
"assets/assets/images/ic_arrow_down.svg": "bb3fc1fa465e8c2198ad65b1f686552c",
"assets/assets/images/ic_arrow_left.svg": "b83173f39a3237862efba734eb6789b4",
"assets/assets/images/ic_arrow_left_white.svg": "86719fa65a77877a7d0d078c9f7f69ed",
"assets/assets/images/ic_arrow_right.svg": "f1305d9e0eef1e0258cbf08e031a0740",
"assets/assets/images/ic_arrow_right_white.svg": "0ecb1b4008758f993eb9ee970f5025c3",
"assets/assets/images/ic_bata.png": "b39262b1e1e8956f83568f9af9a59d06",
"assets/assets/images/ic_best_seller_one.png": "a2b52f112776deb46e0918c556309238",
"assets/assets/images/ic_best_seller_two.png": "c1c11b18b9c5976c49d6a526442f5258",
"assets/assets/images/ic_bottom_wear.png": "bdc94b322c19135ea18ec5a2c3783693",
"assets/assets/images/ic_cache.png": "b76c897f4912aef786e653b0aed01ac6",
"assets/assets/images/ic_calendar.png": "aa5f224b89aa93412124c0b509a188ae",
"assets/assets/images/ic_card.png": "858588a5d36ae7dac60a48840ef0f954",
"assets/assets/images/ic_cart.svg": "1cd3ad56ea788d3172472e8ede5874ba",
"assets/assets/images/ic_cart_empty.svg": "a377703b0fbd98ba4a4522e9b63ad042",
"assets/assets/images/ic_cart_white.svg": "ceb0dac8521ca419d0761eded9be477f",
"assets/assets/images/ic_category.svg": "39454daab9cc3168277c7b59a4aac4de",
"assets/assets/images/ic_category_accessories.png": "7413f536c8b2e6c0f0cecc9fa363fa24",
"assets/assets/images/ic_category_bottom_wear.png": "65e98dfd771ebee014ba4223553ef815",
"assets/assets/images/ic_category_empty.svg": "b86f43324f27212c41cc47312a29f30b",
"assets/assets/images/ic_category_festive_wear.png": "1b8868a5da36aa3790c01b76255d7cdb",
"assets/assets/images/ic_category_foot_wear.png": "714df41925fae54748bcb051058f746c",
"assets/assets/images/ic_category_gadgets.png": "6e760745307053c7bc90531ed5f80149",
"assets/assets/images/ic_category_sunglasses.png": "e7ec034fe2ec0c1d6651c895cd2570e5",
"assets/assets/images/ic_category_top_wear.png": "f16ced55cae585fefa97e7d18db1bf51",
"assets/assets/images/ic_category_watches.png": "76d1d8956169d9e1ed204e6dca86b959",
"assets/assets/images/ic_comment_rates.svg": "02bc15d6a7a03e5707ee56cec789edb4",
"assets/assets/images/ic_coupon.svg": "acd74e9ffcb3eee92617461357410a3a",
"assets/assets/images/ic_default_profile_icon.png": "e03755bc0eacccf26fddf3760bca9810",
"assets/assets/images/ic_delivery.svg": "6a58ca20e28188f6b80fd650b5d00015",
"assets/assets/images/ic_delivery_address.svg": "e3414f373610f7f3265fbb5730708bbb",
"assets/assets/images/ic_delivery_gradient.svg": "0f8ee3cc989cc627b6bc1381706ab8fc",
"assets/assets/images/ic_dots.svg": "dc042c46ff530f622f9b855c198fda72",
"assets/assets/images/ic_edit.svg": "41f605b9b8e4f80920725e6a24313487",
"assets/assets/images/ic_empty_products.svg": "f40635dc683f4d42d7d77befb02b42f3",
"assets/assets/images/ic_facebook_logo.svg": "c0182ef996c13f750cc29287f26a0099",
"assets/assets/images/ic_festive_wear.png": "d2a6b9182efd0a97bd8f4d055fda3328",
"assets/assets/images/ic_foot_wear.png": "943aceff602935e681a27667e7b81fa4",
"assets/assets/images/ic_getto_logo.svg": "1ee66e12478cadce179c8a3608fbacaa",
"assets/assets/images/ic_google_logo.svg": "f505fcca0a8b453d164ae052a58d6aca",
"assets/assets/images/ic_gradient_account.svg": "1d8e8691d146833ac847f6b804e3c7f8",
"assets/assets/images/ic_gradient_arrow_right.svg": "f84f6bc6d55dc7ec5180ea1be421f23b",
"assets/assets/images/ic_gradient_cart.svg": "175ab870284167d788ca40942758fb72",
"assets/assets/images/ic_gradient_category.svg": "3e9230a3c203d08663ed0b66be195dee",
"assets/assets/images/ic_gradient_home.svg": "c327dbe44564eb901896241a8c655496",
"assets/assets/images/ic_gradient_location.svg": "0b8b8bbfc8fd47f5f2ce0a0ce2540d3c",
"assets/assets/images/ic_gradient_offers.svg": "64a28d85ca044ccc4595b5ee024b2528",
"assets/assets/images/ic_gradient_rounded_arrow_down.svg": "5b618202ac32e3d798bc4aa7086b4d3a",
"assets/assets/images/ic_gradient_rounded_arrow_up.svg": "a0cc574dd3504d56a0246653c8a23e48",
"assets/assets/images/ic_g_logo.svg": "3d573fc99e7757ad57ba85784ef07a90",
"assets/assets/images/ic_headset.svg": "ea4cb0a4dc30612291a92b7d82187024",
"assets/assets/images/ic_heart.svg": "3e88a69a24ba9a1bfee295c78dbc49a7",
"assets/assets/images/ic_heart_red.svg": "7c03295b1f75693bd53548c95e134a2e",
"assets/assets/images/ic_heart_white.svg": "a579568bda98019ff8301baf656dcb03",
"assets/assets/images/ic_home.svg": "f92258f8152d1a42027bcf0b3778c4d5",
"assets/assets/images/ic_inner_wear.png": "b86fd82f3369f493ddbe5ed49201d4dc",
"assets/assets/images/ic_jackets.png": "fad1b2800d39f911d81963b8a2f23c14",
"assets/assets/images/ic_location.svg": "98bc164d52e5ed0ad121280a82358e76",
"assets/assets/images/ic_location_map.svg": "f95424f3d7a29fc27b177489af75909c",
"assets/assets/images/ic_logo.svg": "477364a502df7530a679d37779dd24a0",
"assets/assets/images/ic_logout.svg": "9e82d645ea0bfe8996d766b42608e58e",
"assets/assets/images/ic_map.svg": "225912a6f457b89d90e2dc819d610994",
"assets/assets/images/ic_myorders.svg": "57d22deb69d2412087cf2b1e244f0d1a",
"assets/assets/images/ic_notifications.svg": "2c9e032a5aa964ecbac8cbf9d1e6cfa4",
"assets/assets/images/ic_no_internet.svg": "d1b1bf6f6ca6f04dea930c409bdccf2c",
"assets/assets/images/ic_no_orders.svg": "f56c179c2a7559bdf95501318f056f7a",
"assets/assets/images/ic_no_search_results.svg": "bf7337dc1912e15213240d4233549c38",
"assets/assets/images/ic_offers.svg": "722cac84de09e665e4ace89837c63454",
"assets/assets/images/ic_offer_one.png": "21615b238d9f892f45bb2a682648cc0a",
"assets/assets/images/ic_offer_poster_four.png": "934b90ae9d7681f66c979045a8f3ccb3",
"assets/assets/images/ic_offer_poster_one.png": "81610d341bbbdffe47e4e279b95fddb9",
"assets/assets/images/ic_offer_poster_three.png": "20175e00180e9a1cc2edfa96cdc47a03",
"assets/assets/images/ic_offer_poster_two.png": "75a8af51f2b8a6e0f4d1e7dfde3f3637",
"assets/assets/images/ic_offer_two.png": "60c69f62ffe0dcc828c64c37f500bbe5",
"assets/assets/images/ic_onboarding_one.png": "f36afdda08c790b4d2ffb4585b089dfb",
"assets/assets/images/ic_onboarding_three.png": "58c97c94c68dd664dba57999e3e4da2e",
"assets/assets/images/ic_onboarding_two.png": "df2d74a971753c9d78b08eef585b4155",
"assets/assets/images/ic_order_accepted.svg": "b4af0d317cdc6baeb7e3676a3b555c68",
"assets/assets/images/ic_order_confirmed.svg": "d0039d1ba0e5ee03a67cd28e9e6c7580",
"assets/assets/images/ic_order_placed.svg": "91c8c3ce0b6a08fc114426ebfc249b14",
"assets/assets/images/ic_payments.svg": "b0f61fc57ea6efe61e9439d3d62dad72",
"assets/assets/images/ic_pencil.svg": "943d11ebeb6c5a07bca55fcd15f8a18c",
"assets/assets/images/ic_peter_england.png": "b1289d6876821e7fbc589d419647ddd1",
"assets/assets/images/ic_product_one.png": "ee31aabf45b014656c98dfb01c3ecdcb",
"assets/assets/images/ic_product_picked_up_black.svg": "82b80ccb397128ab8af096fdb8e1214f",
"assets/assets/images/ic_product_picked_up_grey.svg": "9cc8a01624d468400a974723bea1205b",
"assets/assets/images/ic_product_test.png": "94695ac81f6734bd43dcb3399308e117",
"assets/assets/images/ic_product_two.png": "7742bb6cf925fd33996bd4d5554422b0",
"assets/assets/images/ic_puma.png": "2206dcd72c1f84505946eb4358655c94",
"assets/assets/images/ic_rateus.svg": "5f1e7589149cbe56eeddd8354628a47d",
"assets/assets/images/ic_rating.svg": "c113dd8959c80f2f1eb4363fc5e9857b",
"assets/assets/images/ic_refund_processed_black.svg": "75d3a5308e3e5ffc92e758463e5b4398",
"assets/assets/images/ic_refund_processed_grey.svg": "94da606846ce1360398b565ee5fcf9d2",
"assets/assets/images/ic_reorder.svg": "cb603b982633b008b7fec161e645d911",
"assets/assets/images/ic_return_accepted.svg": "83a1e9bb39146d626b6441bc4b363afc",
"assets/assets/images/ic_return_approved_black.svg": "25e2d743969d822985b028151f03d389",
"assets/assets/images/ic_return_approved_grey.svg": "b42041b3a10f07def5b1eac51e541ce7",
"assets/assets/images/ic_return_requested_black.svg": "9e8b49771e785ec7a237f98882ea797f",
"assets/assets/images/ic_return_requested_grey.svg": "2552d5e8679642d5e161dfda4f0f0338",
"assets/assets/images/ic_scale.svg": "8f4bef4407aaea41edb03ad3b10e8c60",
"assets/assets/images/ic_scale_straight.svg": "13e9e891c1d7b130aa927a5f0f13b38d",
"assets/assets/images/ic_search.svg": "be945dae42239b3dc5735c3d3eea808d",
"assets/assets/images/ic_settings.svg": "eed5be3cf0123e412b23511368e451b9",
"assets/assets/images/ic_share.svg": "91aeb54edc459786bfce8e453e0a23c8",
"assets/assets/images/ic_shop_five.png": "67961115d794b2722c9685ed7e271734",
"assets/assets/images/ic_shop_four.png": "05c7f34587310379fc06570a608a68d2",
"assets/assets/images/ic_shop_one.png": "1f11e8497b3690e2b7e11f2f109d934c",
"assets/assets/images/ic_shop_three.png": "06547ce951b60c1f41ba0ddd56002bd1",
"assets/assets/images/ic_shop_two.png": "857bff0c2c3c7a5d4226621da44c375e",
"assets/assets/images/ic_slider.png": "e017396191e2ef4d751cdeb9a45bc4d9",
"assets/assets/images/ic_support.svg": "eac1bf00cf1d1b40e033797d28c00e34",
"assets/assets/images/ic_terms_policies.svg": "f800e0b5f95b195c5c0917befa715cb0",
"assets/assets/images/ic_test_image.png": "bf92f3376b2bf30c84f251f8013ba649",
"assets/assets/images/ic_time_circle.svg": "1ecd196cec6828e399fdbf4cc2180ae8",
"assets/assets/images/ic_top_wear.png": "9a50a5f314b7abcc85dbc72ff93c08c0",
"assets/assets/images/ic_wallet.svg": "37d4a09d833cb4679d54b97e3a9b3c35",
"assets/assets/images/ic_warning.svg": "69432dff4780a7660a5b3a0bdbc8a2c6",
"assets/assets/images/ic_wishlist_empty.svg": "797431c0db857915fa0c32a78aa89ca9",
"assets/assets/images/insta.svg": "da4eddd5b3bbf946f2ae5650adc05de9",
"assets/assets/images/location_icon.png": "f2121fe7f90abe69f46c37fd5761b17b",
"assets/assets/images/location_icon_ios.png": "7bacf331192d098b221736e95f9255d2",
"assets/assets/images/location_pin.png": "13d0ecca113928ca65a03a22a2d193ad",
"assets/assets/images/newly_arrive.png": "3fde596bbef0f9917d7b449e25f75af3",
"assets/assets/images/newly_arrive.svg": "307de92f18ed502db85fe88fd816715d",
"assets/assets/images/newly_arrived.png": "18533466b6d0a6ea23b27f8b281d1872",
"assets/assets/images/newly_arrived.svg": "f1b919fa935b315d6ab8e6f2183438bf",
"assets/assets/images/new_icon.png": "439e817cfbb22e9cf4430a702c005643",
"assets/assets/images/new_text_icon.png": "24de731d053415f5d7167060dc8806ff",
"assets/assets/images/no_service.png": "d7cfb70eaec7d61014fc5aaadd0e7aba",
"assets/assets/images/officeIcon.svg": "a77f70ed95f583ec2a4aa535864cf1d6",
"assets/assets/images/ons-1.png": "df13ebf9e6ca746a5a07bf78277d6a09",
"assets/assets/images/ons-2.png": "a94083dd759c751caacfd8f9fa12f9a2",
"assets/assets/images/ons-3.png": "2ebeac5fdd1c1423329e7354f5f97d28",
"assets/assets/images/orderCancelled.svg": "12a54d4ed4d6c2a4a725ad1ee063d387",
"assets/assets/images/orderDeliveredFemale.svg": "412519d7f2eef7d91e4e34480ed997e8",
"assets/assets/images/orderDeliveredMale.svg": "776d5621b6eb46125349b93377daf80d",
"assets/assets/images/ordermaps.png": "fafc585f0f42f33f272fa946478ec996",
"assets/assets/images/orderPacked.svg": "10d322caf88944ea50d1ef367a66d790",
"assets/assets/images/orderPicked.svg": "8b085cbd3579cafc92ab494183ca118b",
"assets/assets/images/other_address.svg": "37c63e972904349e6952ee6d40f35139",
"assets/assets/images/product_info_icon.png": "e41336c009df55a906f9c796537a2b31",
"assets/assets/images/profile_image_female.png": "d005c1bf0de03441e7470a5c3c54e084",
"assets/assets/images/profile_image_male.png": "07db579f369042c8a849ea0db4f56911",
"assets/assets/images/profile_image_male_old.png": "9e71d3dacc3606dc84ce709b47aae689",
"assets/assets/images/return_icon.png": "2c78405e5c70f6607c2d25bcf810814d",
"assets/assets/images/review_icon.png": "f723056f5b675c76394014589ff711f8",
"assets/assets/images/send.png": "243408c3e8fb9b45f4189295a482cfab",
"assets/assets/images/size_chart_icon.png": "b0fa3e993f48990ce261d95759c3360a",
"assets/assets/images/sortIcon.svg": "18cb06b460539825f1ec6a36c2367c2c",
"assets/assets/images/splash.gif": "299ceecdfc8733ebcc0f3469dc3f73ef",
"assets/assets/images/splash.json": "624e21de60c08994efc5c87f48e8cdf6",
"assets/assets/images/splash.lottie": "1ead036df2c9a59da77635b58a75d31f",
"assets/assets/images/splash.svg": "6b945519e14956cb397379a722f57252",
"assets/assets/images/splash30fps.json": "59d79fa05a276031975a70c03eaa1d9a",
"assets/assets/images/trackmap.png": "56f6876fce67e61f4b461e27a1e73759",
"assets/assets/images/trackmotorbike.png": "74909bfdddeb667ea3b7c472bad4fbfe",
"assets/assets/images/trackmotorbike.svg": "8053d2fab2976f4500878e6f8b506e20",
"assets/assets/images/trackvehicle.png": "4b43158b2198b9ebe44651330c02d4ad",
"assets/assets/images/try-on-icon.json": "e1a317c14026628c551ff8e41c9c14f0",
"assets/assets/images/try-on-loader.json": "9bf044187474150ef996dd61cd86a1e5",
"assets/assets/images/vender_icon.png": "6f5fccb79fd94812910565c577410b24",
"assets/assets/images/vender_icon_ios.png": "1e8cbd7e3e25eb7c293b7f3e2f4e243e",
"assets/assets/images/virtual_try_on.png": "1168bb449ae0e1e99a68291e7c495732",
"assets/assets/images/vto_image.png": "27ee72914535ef468525d4ac4b71b81b",
"assets/assets/images/website.svg": "24807f68f75d2551b8b6b4341a645948",
"assets/assets/images/web_app_bar_code.svg": "1c441c32848cd32034a1eee13355e005",
"assets/assets/terms/privacy.html": "b31594439392efc10bfff72f9c79b8bb",
"assets/assets/terms/privacyNew.html": "af66bc1cc37049d054a576a4ee2a686d",
"assets/assets/terms/shipping.html": "f9e49e59c34401fca12dc4a7c1d8112d",
"assets/assets/terms/terms.html": "b65363bcb788eb091f5d5a63af6917b4",
"assets/assets/terms/termsNew.html": "075ce644f6304c4669bbb5e23e2a933f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "293f20d45decc145b3f7134283305bd6",
"assets/NOTICES": "1c437b3c5f2821612bde094dba880986",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/zo_animated_border/assets/border.png": "190a8b670a8b54ad2c01d55fada301ac",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "60b424a2f695a4d923db533154d0b91e",
"firebase-messaging-sw.js": "8c22821a9b40d5d4e5da60ce025c8cc8",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "5ac3db3e5fcc2bc67a031b7841723c1f",
"icons/Icon-192.png": "d5af74df5a4a4f9f145efa4813399a04",
"icons/Icon-512.png": "5058e9e700edb2801cb86623c7559140",
"icons/Icon-maskable-192.png": "d5af74df5a4a4f9f145efa4813399a04",
"icons/Icon-maskable-512.png": "5058e9e700edb2801cb86623c7559140",
"index.html": "7f4bb0f50e8d795d014a3a8f4695d72a",
"/": "7f4bb0f50e8d795d014a3a8f4695d72a",
"main.dart.js": "d5859946af95d325fd2107fa3a2beecc",
"manifest.json": "85bca26cc80b8fe49a76867469198ad2",
"pose_detector.js": "5d660bcf0b2d06eef1af73517f3fd3cf",
"version.json": "858b6d5df0c2acd91e900b4e885a1812"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
