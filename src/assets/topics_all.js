import {ref} from "vue";

const topics_all = ref([
    {
        img_src: "src/assets/pics/topicPics/what-is-lora.png",
        title: "什么是LoRA？一文读懂低秩适应的概念、原理、优缺点和主要应用",
        id: 1,
        category: 'home'
    }, {
        img_src: "src/assets/pics/topicPics/what-is-rlhf.png",
        title: "什么是RLHF基于人类反馈的强化学习？",
        id: 2,
        category: 'understanding'
    }, {
        img_src: "src/assets/pics/topicPics/convolutional-neural-network-1.png",
        title: "卷积神经网络（CNN）是什么？一文读懂卷积神经网络的概念、原理、优缺点和主要应用",
        id: 3,
        category: 'understanding'
    }, {
        img_src: "src/assets/pics/topicPics/what-is-sentiment-analysis-1.png",
        title: "情感分析",
        id: 4,
        category: 'understanding'
    }, {
        img_src: "src/assets/pics/topicPics/data-annotation.png",
        title: "数据标注",
        id: 5,
        category: 'understanding'
    }, {
        img_src: 'src/assets/pics/topicPics/what-is-pre-training.png',
        title: '预训练(Pre-training)',
        id: 6,
        category: 'home'
    }, {
        img_src: 'src/assets/pics/topicPics/what-is-large-language-model.png',
        title: '大语言模型(LLM)',
        id: 7,
        category: 'understanding'
    }, {
        img_src: 'src/assets/pics/topicPics/what-is-multimodal-deep-learning.png',
        title: '多模态',
        id: 8,
        category: 'understanding'
    }, {
        img_src: 'src/assets/pics/topicPics/reinforcement-learning.png',
        title: '强化学习(Reinforcement Learning)',
        id: 9,
        category: 'home'
    }, {
        img_src: 'src/assets/pics/topicPics/what-is-unsupervised-learning-1.png',
        title: '无监督学习(Unsupervised Learning)',
        id: 10,
        category: 'understanding'
    }, {
        img_src: 'src/assets/pics/topicPics/what-is-nlp.png',
        title: '自然语言处理(NLP)',
        id: 11,
        category: 'understanding'
    }, {
        img_src: 'src/assets/pics/topicPics/agi-artificial-general-intelligence.png',
        title: '通用人工智能(AGI)',
        id: 12,
        category: 'home'
    }, {
        img_src: 'src/assets/pics/topicPics/what-is-neural-network.png',
        title: '神经网络(Neural Network)',
        id: 13,
        category: 'understanding'
    }, {
        img_src: 'src/assets/pics/topicPics/what-is-gan.png',
        title: 'GAN，生成式对抗网络（Generative Adversarial Network）',
        id: 14,
        category: 'news'
    }, {
        img_src: 'src/assets/pics/topicPics/what-is-aigc.png',
        title: 'AIGC：AI Generated Content 人工智能生成内容',
        id: 15,
        category: 'recent_edit'
    }, {
        img_src: 'src/assets/pics/topicPics/what-is-deep-learning.png',
        title: '深度学习（Deep Learning）',
        id: 16,
        category: 'recent_edit'
    }, {
        img_src: 'src/assets/pics/topicPics/what-is-machine-learning.png',
        title: '机器学习（Machine Learning）',
        id: 17,
        category: 'new_entry'
    }, {
        img_src: 'src/assets/pics/topicPics/what-is-machine-learning.png',
        title: '知识图谱 - 学习机器学习',
        id: 18,
        category: 'knowledge_map'
    }
]);

export default topics_all;