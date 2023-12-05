import React from 'react';
import { useContext, useRef } from 'react';
import InferenceContext from '../contexts/InferenceContext';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function Results() {
    const { results, setSelectedImageFromResults } = useContext(InferenceContext);

    const results2 = {
        "glioma": {
            "0": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00014-001/",
                "diagnose": "glioma",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-GLI-00014-001",
                "patient_uuid": "d7ab7387-15e6-4a63-a2c3-59a5930506b2",
                "score": 0.8185347,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00014-001/png/BraTS-GLI-00014-001_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050824Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=4cde5cd4da79afe5dfe9e3cd696a6eeb5d6b412d891690dc0381f5400d061d61b605bb52a8b975311240e4030d88ec7e0e7f89241c1bc9dd31e78304d93c2960107f66a45a4e1fd5734ef7f7483435d04a677908d0d9e6b9a7c30496f7ba0ae61e11d4cabc7c359feac5593fdb95a0cd642846c8e183c75c1f8e36ca52210f16b7c7f3fc86f4b6a98e95ef69768e5e0d3dd4f1fc94a5e6d9bb3b0748cbfc8300946af17a17242578fb86982c90b8e08d5f7929b5b49ea3c5e18ad8adb4ddd737ce78e4b201e365069ee3a39519b6ca8f9144a1b236d59789497f10b791404c2f4b9d0032fd2fc618fe0439c332f94405c9d694051f20cbe740cbf2d0079b03f6",
                "slice_id": 46
            },
            "1": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00014-000/",
                "diagnose": "glioma",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-GLI-00014-000",
                "patient_uuid": "60501dd6-97af-47a3-9764-67c280d01aa3",
                "score": 0.7831094,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00014-000/png/BraTS-GLI-00014-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050824Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=61eb23dd7ffa1096e95e9ea7403ed751bbf9402d497d9405d1c5af399320f36b125b8fc768bf4938173ddebc353bbade618ca2d40fd7303fa7cfd5b50703cf0bb22140ffdfefc4db7c6eecd434b2096a39285a8fb8c40fab445b2b0fff83107cdaed339333a30f1d6777f937be35e54e53a28896d939f66d1292168dac257bd8a9c50e40ab34cfa8bfbb804b0265bb9744efd49b513ea0d2f2ad403f74ac9e3e740eda45a74b8a1b8ad652bc37ba0bc8910d7c57fab04d4d91831784c1c09f863b2f533b1585ffdb74fded7122723c787395e06d23d6a80b35f9a61db95ff461146c8cfbf8037d6cff24b2ac641f1a30c0202dca97af9372e30744175563513f",
                "slice_id": 40
            },
            "2": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00058-000/",
                "diagnose": "glioma",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-GLI-00058-000",
                "patient_uuid": "8c23f47f-46e2-4580-b51a-c4bb5b70c81e",
                "score": 0.77720475,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00058-000/png/BraTS-GLI-00058-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050824Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=90ce1ed0022be5ac3e7cde883082b0ee39d72f536cc0273d2cae45d16360fce71a5eece5e9f351ba3443710ea4b6991be3d05a1a5e878053718845cc716203c1358eb16523a99917d15de4561b180445589dae7e86161b2357471ff62484a3b944b4b4db0a830131385e03bb64180334d528373ae45331699f43717136a0ce196fba4ca30a3dca7f953b22125686d1982e3a2420e7bded2c6da65fd9b5d135e0eeae74639e344177f5f71e229a558b507bab996f81a91afdf17419137e05796c7426400043c1eca6393c840e2490b8595af8821cdb0ddbc9077befcddd84348ade23e84cd0d9e3f1d3f9af984b4526d71b11c997cbe0251a1722bc5bb0cfe61c",
                "slice_id": 67
            },
            "3": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00024-001/",
                "diagnose": "glioma",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-GLI-00024-001",
                "patient_uuid": "0934916f-83db-498d-92f6-dd6738f3159d",
                "score": 0.7766332,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00024-001/png/BraTS-GLI-00024-001_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050824Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=804337e751ed2235b2d61da44ec01555919085bfbd45ec920d1a8b700de7b32e2c5c872d24e835926e5fd57ebfe32e7a740a7d857892bd48d4a22157a54ed82069e71d138539820fc960d360769df95f7d9edf4b615e8a7ed3086ca18e89382a75c5d0bc61ff31c9051ade81f032962dfd1afc5770c267676cd3c9f4120a9246c69da62e0475244f1cd78a7eb6e4aa6000c2d336054f34331c25510b12e6abead3b3ad4f818483ccfdee1289ef4ad44d919a00e996a05ef508056091ecd3885116fda4f67824d42e9cde2fdde0548dd3c2afbf922ff6ad8aefb0f16adc6516ec5ce3dc26067625aba2eed6f4ceb2f194f0ef2ef5153d168dbb244655f6c33d00",
                "slice_id": 43
            },
            "4": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00049-000/",
                "diagnose": "glioma",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-GLI-00049-000",
                "patient_uuid": "d8150cc4-a34f-4b79-959d-b56a621cd678",
                "score": 0.7675706,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00049-000/png/BraTS-GLI-00049-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050824Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=5b3d88a27195849bf96512d51859c5d73d682a14f367885d100ab7ad622a239f9b445b0701331edfe441732aaee5008578a03bc691a451763f2c0b2dba28c1b0262baf2ebb99ddb34194c27c0eb020ee61d8fa5b23fdf0c5e1011601325263eb177850f2e766962552907ea8dc3a56fb2b259441e42de0fa1674f14f7a5be5a731523e79c93d6103d925d9c3cb32c86e0de0a3c9ea258b8af8fd8ce8df6e2cd789c788ff4c57efd5e6855dc2fe980e73e716ac7bb451d308cfb07d0cbf4f5a60f00528fce6f303cf2d7703c359d6b7f7f9a360c0629a423fec53effb8f9132eb5664594b66d3157a0c3e64e73c30f96f2cf1efb1a00e41251aa3e8aab42c62d0",
                "slice_id": 106
            },
            "5": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00045-001/",
                "diagnose": "glioma",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-GLI-00045-001",
                "patient_uuid": "f5a9a42b-e4da-46b4-8d25-38ad49eb51b5",
                "score": 0.76717305,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00045-001/png/BraTS-GLI-00045-001_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050824Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=8abc724b99c7c0fde54cf751a983e28322970fd711d2973d03a754cee5fdd8b8c17eae2f1da7350f38a780fabe3a2967acfe88406d16e35b042895920b23c693cb258d58151f565701e43b679a670128f415f67c38553ec736c78bdd02591d46af02ef195bf1351faf6399db58446d348e4dbbb94be3b626a67792d71560c8b73a89959e89cb5702742e61d52384275fc578db45b28b31ddd7c71c8956b36a9ad0fa4fd27eda16aeca924c6ca679ea972ab1983d965730f6bbbe834b4fb9d43e52bf40819d726366beabd07b7106c99c5f7a68865e01f193dda8b01045327742168173b3a0e5f9a8bb1d8e82747f3e936faae83560bbcbe74e46fff2d47bc9ef",
                "slice_id": 50
            },
            "6": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00063-000/",
                "diagnose": "glioma",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-GLI-00063-000",
                "patient_uuid": "7c777465-098e-428a-9a12-d96ba27780fe",
                "score": 0.75512016,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00063-000/png/BraTS-GLI-00063-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=92bcc59d6e928854614e4979035d785255307588be13ec64dbbdc083f7fddda000bc2bf68726e0afd7740027aa5a02837a18d37b6eca2c93df5aba112887f0438d536dfc4ee679ff4b417c5b8b0d300f76234fd827e8d6963dd70f4e4635e6a9eb8be1034c0d9b6720e21ebe6bb3a89acb9b5679358be691d882df2cfab9357aae4b2e9a1128a52ca2e4dbcd637c5afb10a822d49d7c4628ad82f9f61a4c03a31c44166fbc48f9d1c5428c96a48f4ff2aaabf78f618ec2b9c645f8c1f4ef0efafdfc63784cd62458780b7247589009ccecc0f5247932820f76345132480e3dc5e195ebd7e4f458a420af2867a979d0d2cd721a3b6caa92c0a2e1c57aa72ea7f6",
                "slice_id": 123
            },
            "7": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00016-001/",
                "diagnose": "glioma",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-GLI-00016-001",
                "patient_uuid": "8b002748-2594-4b46-a0f1-427c718577ee",
                "score": 0.74988234,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00016-001/png/BraTS-GLI-00016-001_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=81e1ef8cccc2546dd1fcaf7697275dec8ee245d24f2d3a53b2fabea9e5c71c8de4eb8d039cb98fcea78d6e971c7438e1074800725f45541b8da66c181029dca1dcd93d04c1f37170be28e5ffa9cd972ff375f8e23c50982ad8975e17639db69a4149520a3de06e1d381e7beb68d3df79776caa509f8174748f371d1e1dc9e6705e01aa82b3252486cce998cf3373d14c0f9797986bbc27eba866e5c5058c2cee84e7c9e45242a7c870f4d94a570b2813e98c554238cd4e99df14d175d48c0d5583d78dbddae5b3215d1d82f5d4847f19556c01b49b04120ed97508784b3bb86f98e2b58ea5b210809c89253300b2dca3e03e3aa06c86c54ee3739fcf20b0c35c",
                "slice_id": 65
            },
            "8": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00098-000/",
                "diagnose": "glioma",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-GLI-00098-000",
                "patient_uuid": "4e703fc0-ebe8-4987-8a2a-6975c87e97b4",
                "score": 0.74649113,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00098-000/png/BraTS-GLI-00098-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=4eefc35d6de94bb340a95a31ee47292a9b4b34db68ddd244d195f55deffd66460aba2d7a3afaa1dbdd6e5f1b48b4c1f8bd9be3863eab5aef02cd275d9b5e224c8bab2a1c52acc2a798baea485be296e249abfb3fd79abc3d2765081fe3feb125e0fdf469a4f03f3369ef3a7081781c92759fa552def52817f027beea165dccb4107d7bfd9b028a9e02dc5dbd97ebf0c104c6c7a41b30d51a20233d48258ff9fac0e0832f1b05b2fdcf4f968177a8cadfacd6332e2479c1025bcf5ee2794888e5df6c6a08b73d73bcdae036ae978eeb59355aeabd78c407afee3e79919f062d8603365e03a69bfbfb44599b76425e639601b2a2b0bf3c971230d8cf08a9593132",
                "slice_id": 57
            },
            "9": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00058-001/",
                "diagnose": "glioma",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-GLI-00058-001",
                "patient_uuid": "ecf4f2e7-a820-4cb5-9a41-9545e1079aca",
                "score": 0.7432645,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-GLI-Challenge-TrainingData/BraTS-GLI-00058-001/png/BraTS-GLI-00058-001_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=857cae2c9aa93695c601d879f3167701d1687c88e41a6025e231576923545a565162bcac69b9e40c3b9f4def93c16f6c75a9a8bcf2d8362bc0637c891c46e85b4e0dd5f407409c329377c8a3e9b67dee100219d6e32a1d4f21349b12adc3de2f433debc4a0a7a8544cbc6fd23d7282c753fe151683497b6971e1fa1991f2d4147b24bac67a3297fe0b69115907c80c6ee5c22a28eee7a88d8c5ccddd3ae065fb86b45c5503be6932c32d21b3e1c2a3f70990ac44afd93b6cb3d62007c998c1195f39bf6d18e69e95d9ef11aee8c838444b1a1ac226cb579bcc51424dddbed7b5249742da58ee783f5b32cea991cdb30c0c499156495b223e2857874e502509fd",
                "slice_id": 54
            }
        },
        "men": {
            "0": {
                "bucket_url": "gs://brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00026-000/",
                "diagnose": "men",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MEN-00026-000",
                "patient_uuid": "8e760425-c3e1-438d-9216-433bd6f1ab60",
                "score": 0.93579876,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00026-000/png/BraTS-MEN-00026-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=587f6d1f7f49f76e2857a0b0ed4d7772f5c244323e21db3f1c7f2cf8c14807f5cfc65148c3e5db0e8dce4605f6b42c5b8079e2786f09b0b18dedebea8307e80cdb19091b73715d7795041c307ce648005368e28d0d32916b6b0c1157b1d2eb3796af5a044c2d59aed06ac20e91afbe16f1908742125a4c92a7ee02d1e3593f47b52fa9986a17890954ee55e75951078fd46b7d16570ecacf3f52d6913e3c011e90765d98df1e7482e071430f6f9e26d49ea0aefd2e11f897b378159793de72fe8bcc7d981e390128f5ab7d5f4a5ce36d9b4a13a0c832c8891b8dd1db88f5da915dcc2eda356dd44ae0c455e5aae303732a0ff29a5dd89a20756a9234cf8b5abc",
                "slice_id": 29
            },
            "1": {
                "bucket_url": "gs://brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00017-000/",
                "diagnose": "men",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MEN-00017-000",
                "patient_uuid": "a71e9de7-6001-4db9-9764-78d8f53fd057",
                "score": 0.9195896,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00017-000/png/BraTS-MEN-00017-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=88e71ea2688174cd47a652cdffbbf1643709bd0d631c6c3cbc8dd0a250af42c858206e41a38357f45cebf557422238181414caea61c881bc81505ae7d7511444d61534c1c5adbe6e883cc36aebad37cd8ee5f6586aac99b883babee451e9c2423dea112114bb8ba8f6e3e16e2981460b47bc74b5a9721c31fbbbeb391e61c0a5caf031ae79e0eec18c1a1417ef74907506fe2c29fa5d29abb7c00149444fb778186bda0f81460be2e2b2aa3700dbde2fdbc92bd2f48ccb72dcd819f99d4cb0b3ade1a9320e759821c9c7416f497d33a4295ae757df4b8a29c8dd840d44352f06eb75b117eb1fc6cd613ff9e84223de06fde56ff2750578cdb5a41a9cba07b1f8",
                "slice_id": 33
            },
            "2": {
                "bucket_url": "gs://brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00004-000/",
                "diagnose": "men",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MEN-00004-000",
                "patient_uuid": "9725d6d8-0c37-48e5-81a3-57a46599f5f1",
                "score": 0.91793436,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00004-000/png/BraTS-MEN-00004-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=222f8d542b2018e494cdf6027dc8be06cafd756283d6cf886c6b103b50e8173937a5e24386aa3d2f1f6459c611c8bfce1939afbf347e1c925925c91daa91eafe4d241001d8e502b88beaca6de9f1dc5bc0f0a5bea80c0130e6b138e762878e1a5f14589dc6338c833835b28736a3aa56a103358cccd3f020d98fb5da974d2d03d7d97e849b449fb798e9e9dae286856676d86b3b5e09b23afab8c145b52c8606dd32d062bc001c8e70624d2169b915c84df9e350e9bd3eadb336c4857ddee4cef2845cb89393abe7b2f59426fa82a999a9ff60a61735538ced1d8d2c3acf457d26f76bfcf66d57d0e72e9f1198b0ce1cf5210b4ba696b3c8ab7b00b1cff34271",
                "slice_id": 39
            },
            "3": {
                "bucket_url": "gs://brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00141-000/",
                "diagnose": "men",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MEN-00141-000",
                "patient_uuid": "0c5bbf5e-03db-4b8b-ba6f-5d90bfb1c883",
                "score": 0.8913079,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00141-000/png/BraTS-MEN-00141-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=8588ad8fcf99aecb2c354c17d8ee2a0bbae110021c52d3ae8a39a1af03c04707eab62569f80fe19c33137d378e861ac223368063429d702e3bac1f2373867572352d948d04fb0dc0417cdaf9192a407288ca150091a792187d6b69c12bb5835273da2838da96fe7824a7d110d9c7a88218d269dec6f06213a6f1397fbe8f56139a0a21b7fa2d923c7c399fddd7e1c21865afc6cdf2907fbc97d8f4b30760784e955d2892b854acacdc9408ba98b9b47a01e8b4537f812ad1b7277dcfd0456814b27d0460c6174333cffd9d56aacf154a24f73d35689c7fcdb6b55adc0be07443ea43d6cc151a5d120e45ce710f7d8d769223ecd335e45e80e6baee57284cbead",
                "slice_id": 42
            },
            "4": {
                "bucket_url": "gs://brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00069-000/",
                "diagnose": "men",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MEN-00069-000",
                "patient_uuid": "f62de7f1-f1db-40fa-acf1-e4f1a4ab6494",
                "score": 0.8818017,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00069-000/png/BraTS-MEN-00069-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=5818278704e369e03eeef6942fe2bfa5d8bd283d17cfa21292ccfac62c4fef23e4fa8cc345ed075d734cc08b1528e243e03cfae9d216dcb358d5faf61ac5d13b79d794353e46a21e4a8fb8c47b883dd53780be76c867aa4ef134af8f2ed769c3b49e36a5656fbd741263c207a9724a8f9cf5d0a997f3c3aca4638e81f7551165b46395d567cd1b9c6047cc3780427ad86ad587b5ba61bed91d3c8053b5608d415e6ab18d986ea92cca713013305cf094daaef40c2daf28859788552ce8427dfb4e883e91d8ddf139b02f3fcc7b3c339ffa2013b78f279324974b26fa89665b07c2157d8fc2226bc8d73dda4cd920305a13dcd4f830b5325d1c87e4c84fe92a9c",
                "slice_id": 46
            },
            "5": {
                "bucket_url": "gs://brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00090-000/",
                "diagnose": "men",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MEN-00090-000",
                "patient_uuid": "1b1459c1-9383-47c3-b9ff-717d7f4e364e",
                "score": 0.87950194,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00090-000/png/BraTS-MEN-00090-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=2cb7c6d8c958e0975d9c09ac852c42c3675f73f48ab5014c60cd733134ff61bba3a1f60f224f941905a2ec31e08c81798a71ada6aaff5d1f3a35ce7e0ba4b86981401c130730a9297acc296e829d5c7165f31faed2efd739bd5ba8adbaf995a9b38ccc2b467a7ec884a55d9a87fd4e4687bfe3b2ac8b36a797b806a94aeecc978140200511258d4bc52e0961e144d42072e18a4e31ce40c43c0818fbd2224c971d073143b12ea920a65b7f7f6d52321a3dc2993f0575266d7d41b394dd78c4e2cbccee5cedd931070c6b2b2160f85e6fdf41ad3cd2c891b5c8f66ec95d067c12ddcb2c1f73919205913501a09a05fdb3c74205e97e56e10ccf57f71d13ab7c58",
                "slice_id": 34
            },
            "6": {
                "bucket_url": "gs://brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00056-000/",
                "diagnose": "men",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MEN-00056-000",
                "patient_uuid": "46c340d8-19ea-45f8-9b0d-9797cf32ef6d",
                "score": 0.87640935,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00056-000/png/BraTS-MEN-00056-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=89263f93dc754cfcce97d2c2da6adaa6d3abeb96a64eb9837a3c75e3cb6f20a1e35123f446df62259cc152079b3078836144cbcb997e8f998607ce5e921a16f54164b6c1d178713f08425aee8e704f47099b127918193ee8fb6c207e1f10d383c09838d0d05179037a71d76b0198777b040621012d31b2ba2aed6c37d11a45c2432c1e2950e378ba8fffcc61f280f8352098d491596afec986a419f013b1758681dcfde20b071581c86905285697f3730e3267cdfb6424f1634b191e5c8f05f9aa0f051076305fc2dcc713dc1887c6df2b8a57975b7daf7c14b27c65eaf8f0325fe4d30ac623f49add000761f27acaab15953f4d0b6f267c5eaf199fbf5ef2a0",
                "slice_id": 40
            },
            "7": {
                "bucket_url": "gs://brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00111-000/",
                "diagnose": "men",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MEN-00111-000",
                "patient_uuid": "82c0287f-a4b3-4414-aa47-c7fa92b5ec83",
                "score": 0.87486875,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00111-000/png/BraTS-MEN-00111-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=5d8e4e7cac7b34e771b395ea5d860c4573acd1050e96143c56254fd87dbe3b06dcab53762e34c5c647cf8a77f5c78ae119598f223b808422ce75bcf21e285cbd8a9e7810f54967261facdbd2efb1aadd8e1ef23995fb89006da74a2704cd6af8a2ec5a5f6fd07b1bbf1845eddb33b2ebd999a397926f4f523366ec44545de756f6436add01acbd75c8579fffd87739ca26044a5ce20d1ad1cc9cef9a93e85166ffb8ef0476bee09aa7d12f81dd8a1add8167a8143507f5f6ea23321a846fa64dc21d43d872a6b63f72f33b9194b71f6916bcf1239bfbe87f75c48dcfcd8edced063b1f9a199066aaf9bb399e9ac89312d1fe42cf0aecb9c636a2c6c96794f48d",
                "slice_id": 37
            },
            "8": {
                "bucket_url": "gs://brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00048-000/",
                "diagnose": "men",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MEN-00048-000",
                "patient_uuid": "72f38721-3dad-4a65-9d8a-a2cbc7cd8401",
                "score": 0.8648357,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00048-000/png/BraTS-MEN-00048-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=62b288f488392f6eb09e539e8e46e0e05e27b580a06e2e7ec3528c93d5665ca7467556d1539c7a89542a9ff01cb0730c71813bf8b60aa61df7c59341c6a45be7dd43678a6c0c218ba53e5f7e9a273513df0419796fba9eb0d4bca19960d9270365349bd1d105f0d06437d601312389ca310de6e983c48451676541316b49832e8f2a5857d9a8453421bfd08ac4aff20bcda46ddd50ff53049d867d4298abb2936cf5a27cdce088d2db1e456d2c93c03e91e8ec3df23556590438de3d8da0c5b4f53aaceedbea60c3bb1d5eea6c9fe605afd218be834ab4c8318fd6db9dc805315ee195b8e170bc65ca047e452e8727c84cf7dd03a274005e8213b84a7e09bf5d",
                "slice_id": 13
            },
            "9": {
                "bucket_url": "gs://brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00081-000/",
                "diagnose": "men",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MEN-00081-000",
                "patient_uuid": "a5878497-b152-4518-812a-1d258097c137",
                "score": 0.83629674,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/BraTS-MEN-Train/BraTS-MEN-00081-000/png/BraTS-MEN-00081-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=23b052406aaee803c000c3a13b4f1da0c44e588a54169f6ac7ccc2b6ff79535b5983b0aba1cca7aef88363929b9c31360f93384ebedbcb3ad884c6ed4b93e3e141a79cfa72a5bf88f53f16976d9c8a3e105ae015116974c1e280ef0f03b221d25972d3964f54f79b1b2b407052459911bfec96a8dc2cd0628ce4a28c4cd1c97efef89892d50efe228bae9a9d9383de7f18f2c627eae456602137647fd9e3f374944db09d70997ce2542c0fd9898efdcc4db66940cd3b61d0f08c46be36cb81b1aa715aa3918490cbd53d249f842da188a54f680163a5dde62c65e8ccfdbee95a33dc1a391193ac86231bda523210457ebb4847486773dc97af1f7af32582523e",
                "slice_id": 37
            }
        },
        "met": {
            "0": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00133-000/",
                "diagnose": "met",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MET-00133-000",
                "patient_uuid": "f2731536-5bab-4466-9d52-46772c7a2b3b",
                "score": 0.9088948,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00133-000/png/BraTS-MET-00133-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=4038d78d17c4165f48781991dcf2a5101a54298d20effec60923250d76254936d4cb1aef9666abc928a134c96bb68b64532dcfc61a2999596fc9e633ab4156fc20c9ff9e7701b2734b44ec252a3948af2f1602e9e672cdf00895e82c8609908b60c3c788ab722bf3a56c06a23674d3a34c379cb3b42694f43147389d5cbd7d8930524489d2804b187ffb729a50145adbacabaf783142ce831c4fa621a6cd35744b50645a45bb0d1e3396502da5d62d061804d3d584bc9c08ab2bd79d53584310e911cd9982c031871174cf19cd95d68ef7ef4bfd4bc9b1cd562c957f661250b48149f2ec623eacf0a810fceb006b8c99c4b80bb5ec687a7d8e5519ed381b24fc",
                "slice_id": 40
            },
            "1": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00136-000/",
                "diagnose": "met",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MET-00136-000",
                "patient_uuid": "8bbd00ea-62ea-4cc5-8104-fa0b312c6915",
                "score": 0.9078546,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00136-000/png/BraTS-MET-00136-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=29bbb9ebb127e56c651b54a462d93503a24187e93e45b6902ec27eedf889ac6f2b4858095db3feec85d5e24cffecfc4a6f63289044b17f068c4d0aa92fd2bfd34408e3d3b9064da9a68d1b775fa489d53e44e26f2c7458e0a7a29ffdd5c7ed8e6c9915d585e4722cbe7cb3e09ae447392de627f4da95f5e084011b83c16b1168b5357a359d7817cd970f2b3557dc71e6f77b4a1df407c9b1b689505c598dc424346a73205390061d6b33a7bebf03d26a554540fa3d0722a84613d8bffcbd0907ba48a45f6afd049f4782fb6c7c204d6fdb8dfbd765251859712cbcdaac35a4c2afbd2b0c24408800ec6840999e9f4406cbcda71db9f23a5b5dc8366031864b41",
                "slice_id": 32
            },
            "2": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00100-000/",
                "diagnose": "met",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MET-00100-000",
                "patient_uuid": "9d8f42a1-24c2-495e-bba3-d9ee0cef371d",
                "score": 0.90357786,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00100-000/png/BraTS-MET-00100-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=4ece17c9b2c4925fcfc74f9e9af76400b0802e40ee289e5befc4f97d6d102a68af87fe504bac0ebff225571793000cba0677b8a23871d4e2f7826e79898bdbad14e8ecba5731de7be8dc454e828fece50fb1f0eaf3a373c3b3735a3d9a6895b002d002c71b5e903a41fe109061e46c5421f5fe83248b81a54cdd056852cb7dbd76deec6da96aadb26047cf094518731795a730c87b7aa4954a49380a4f35709dd84ea75e027627fc718bb85e0a95586067fef3a39886419744e103212b8d124077911489d7311f0eccc86eddfcd74615b94f233b8a234cd4d2a6c29b211207dc78e829dc4f8b6e81c4529d2982d78a2e3ff578bf86778487d45a8e1eb5a3e7fb",
                "slice_id": 37
            },
            "3": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00108-000/",
                "diagnose": "met",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MET-00108-000",
                "patient_uuid": "b29af313-c7cb-4915-bda3-61e7db96cba0",
                "score": 0.88836974,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00108-000/png/BraTS-MET-00108-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=8a23345a31236c314f02ce95acd7e7f6eda78e5d44b969c151a5bd51b43814dfec25bfe18799b0738edf66904600f28007bcddca2732478beaffa20dcfa055e9a15545a83dcebdf8c2762264cad13e1169f6b1e78e7b8b9ac4d34a6f1e0d0a23f072acc78cc140a99d1484194c216b0876960f7eef5f4645fa10481a49b9c4bd739800004921ceea0a751924b9aa8d6783a5ae110bf903f240d37f5603413944a6ed37c148693079cb578419ca304891d8ab8b529aceae36eb39dafe3a2406788e7df74d60d63faf48653b11cc218c06ecb3c4de2cdfb9eeee2cecf83e214b1d366c50ca09dcf95f70d92e32915a65fbe1c85b21118687a9782d023c35f62384",
                "slice_id": 46
            },
            "4": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00175-000/",
                "diagnose": "met",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MET-00175-000",
                "patient_uuid": "f3b0c03d-8270-4c06-927c-a7ca7a71fb78",
                "score": 0.8858701,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00175-000/png/BraTS-MET-00175-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=65e28b68be660f9e2da8a5c84de2f1b2b6d04755087db8eaf41b2789c5657d35001e0e11091915094eb3214b20667e715052dc0f370f3f88f28f489df22cfaeffa4ac579658260ef7f1ed0086219607d617179d0a09d6c453b74013fc8e29c79730cc31e736e19adf17a073071df1f1bde60b025025424da8ba258c838f45b85e21f7a8b65cb63043d329a22d20ed617686b0a681a37480f4eca3181197ec85cfeceeef76fbd485bd3ba8b983cf60d00d59839fe4b4082adbe409afdbbcb3468617f03822b9e1da51fab753c077f85c6417f312871041d94f4082b04508a2952e8e3b05cac34e4846aa3ddf15796fbeba11c2c31be6978db9e334c9f397cd675",
                "slice_id": 38
            },
            "5": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00012-000/",
                "diagnose": "met",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MET-00012-000",
                "patient_uuid": "f6a4e433-6cd2-48e2-9fd5-42192e7dfcc6",
                "score": 0.8825603,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00012-000/png/BraTS-MET-00012-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=699034bd277edbf82724557a752cbb184c0de55e6b2a2ddd5f68c409c993ed8e075de555270e6b3e39b17b164a427779887f8f3bba4fe6a72135bfc5a477e5fdc8ed23b0c22e07196862f6e1d56a5383a4b40f878357564cef7bdfec3a0c26dd4084c7c8244ee95c9de75149a1472cb97fd613a964d7a264cdff7d30cbe26303355f2fd7aec05512699ac6466ee38a7967bb1461efb34596e91954805fe9ef117ad475aa7cee5716fc3179c40aa5a468602d1031fe7f7de8b5e533de3dfdc92b6270bc74bc32995dfaa7249d4991c30b0c67d4ec9f7200d750570798099b5850e907d73e139564f21c760395f01f1cc5cb64bac7e94b7dacc8badf414f417f64",
                "slice_id": 33
            },
            "6": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00096-000/",
                "diagnose": "met",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MET-00096-000",
                "patient_uuid": "021210b7-cdf9-458a-abf1-2f160c874cec",
                "score": 0.88172686,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00096-000/png/BraTS-MET-00096-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=29e31255efda9d4df2a89463542968d84651801f1836cbd3b48a298f0f7c2d08c18bae08b5d2ce90a71b87f03884e02d0ef03442be65d1295c782fbd0c4af7d9c6d8a328295a22dce3efec89559820152a34751f315c08ab70955baf8b41c15acc7a29d1155d626f1c1525269655f98d9a50132143d50d9d45d334ca48d622012c0219b648199db055d7fad7c8f15d00deba3b9e628d86148d8e116a04810a4044a0a309c51d58c62be02d3367cfdff3811ef98e92d1bca5940c367a2b23afd90e13a3af7d1baafa19f02f06b7d65702705e44a71d993f30092f1be3a9763f19b331afd927c2a4e2209919b66dabbea4fe573fd84f7f56eaa4c5b6c32a8ffee3",
                "slice_id": 36
            },
            "7": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00024-000/",
                "diagnose": "met",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MET-00024-000",
                "patient_uuid": "67150fe9-3b89-403a-8b28-a212d1987843",
                "score": 0.86945176,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00024-000/png/BraTS-MET-00024-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=1a823e0e9e4cddad4a36a6c4338277714aff34251b77e1299e807deaf08caa0c22f108121d4ef8f1c3b09c9a43968b652d5421d1dda2f1f5b66324dca18b7123afe9eb6465ac098480b5b0512c3f38370c2218d392547b6c3c4486a77663a6e143a73bc8f0185f05b077bf6b38e4ae1af52124dae860b95553ebf9ddd72e9224b45d659f0fc36f4cfe2bfe9c4b0866b871a5b0d9e7531517a4e0c47a0b1ffc56139e558ac61a0adf77e4841c7c8e3099e87043d110f628cd97fb9ad1c26b2961d84a7b3d48e4bacf26c26918959533933fa6aaed39c398f2c0f064ba5d19c403ce2c06a53e4656525fca3ed642d1c08100d8be0cd2c9450e91f193a0f43b7920",
                "slice_id": 33
            },
            "8": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00164-000/",
                "diagnose": "met",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MET-00164-000",
                "patient_uuid": "d4793bd8-5500-4194-ad2d-6591595afe49",
                "score": 0.8641577,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00164-000/png/BraTS-MET-00164-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=0dfc6f32b500c74539aafb7fc8bd9b0f0767c62b896498dc028728dd712a774f63a80370f5a0ad0369d9e73ca93882d26da72f793f4a280c77d0e2af69e9b430bf4077c7e1433c43ee6c7c715bd3e98a3ee4054fbd194028846f04a243c20eba0fa619747ac1a4c959519ab08a8b5e9d7cb631fe09740d06ad5794752d0b558eaa53a53f1776a596e089f55bdef3fa0057b12823e3306d81e390abff77eba79fe9f47106292c1398cf218108232d8ef9717c5954bb9f0af2ce6005df4a89e11e5c0c9b200c1364ba0a4432937fd5c3a5730a735c9f1564bc3f5e4a3ae7839ea2c9432d8e2229b6d0583aadca71ab00b1b3d24efd85fcc5372e251d580966229b",
                "slice_id": 42
            },
            "9": {
                "bucket_url": "gs://brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00015-000/",
                "diagnose": "met",
                "image_type": "flair",
                "origin_ds": "brats",
                "patient_id": "BraTS-MET-00015-000",
                "patient_uuid": "7e687e6b-ef2e-4faf-9f24-fad7405f0d81",
                "score": 0.8584871,
                "signed_url": "https://storage.googleapis.com/brats-image-files-eu/ASNR-MICCAI-BraTS2023-MET-Challenge-TrainingData/BraTS-MET-00015-000/png/BraTS-MET-00015-000_flair_sliced.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=image-download%40pixel-diagnose.iam.gserviceaccount.com%2F20231204%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231204T050825Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=7f3205fda1a2a7f563850c10146d7d705dc74279baa6969388fadde6df90c1ed4597ed4da471638684f86175e7932613b197589cbef2c7e8a142f74c9b5a8e7219de8b92abcd878250ad43092307e53929e59531d099af000a0726c4f835fd2d2531aa68b02a5ee78b86803628903997ac0e83aa76e46bc6c4482fe899e3b409cfa8460d313a28ba00c5993f5eeaf157b892124e261e94bf038467785fdbbf0012cbfad94bf086a0d148e9ca2d3bffc8dbd3df8f756670cadb5ca025e3d80b3ec5ca6c17ab68bbb9c14d998d0d72d403c135cadc2207e96e16bcf33666403dc8f67fea562e1e05a5027a4b70802fe19478a4e08d6586d535334736c0a8df4fd4",
                "slice_id": 46
            }
        }
    }
    console.log('!!!!!', results);

    const slideLeft = (i) => {
        document.getElementById("slider-" + i).scrollBy({
            left: -500,
            behavior: 'smooth',
        });
    };

    const slideRight = (i) => {
        document.getElementById("slider-" + i).scrollBy({
            left: 500,
            behavior: 'smooth',
        });
    };


    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            {Object.entries(results2).map(([key, diagnose], i) => (
                <div key={diagnose.id} className='relative text-center'>
                    <h2 className='text-2xl font-bold mb-1 mt-6'>Diagnosis: {key}</h2>
                    <div className='flex items-center'>
                        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={() => slideLeft(i)} size={40} />
                        <div id={"slider-" + i} className='flex items-center space-x-4 overflow-x-scroll scrollbar-hide'>
                            {Object.values(diagnose).map((result) => (
                                <div
                                    key={'' + result.slice_id + result.patient_uuid}
                                    onClick={() => {
                                        setSelectedImageFromResults(result);
                                    }}
                                    className='flex-shrink-0'
                                >
                                    <img
                                        className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                                        src={result.signed_url}
                                        alt={`Result ${result.slice_id}`}
                                    />
                                    <p>Slice no.: {result.slice_id} / 150</p>
                                    <p>Similarity Score: {result.score.toFixed(3)}</p>
                                </div>
                            ))}
                        </div>
                        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={() => slideRight(i)} size={40} />
                    </div>
                </div>
            ))}
        </div>
    );
}
