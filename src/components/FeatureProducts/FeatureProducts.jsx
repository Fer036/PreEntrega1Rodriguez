import React from 'react';
import {
    Text,
    Flex,
    useColorModeValue,
    Box,
    Image,
    Heading
} from '@chakra-ui/react';

export const FeatureProducts = () => {
    const slides = [
        {
            img: 'https://www.amd.com/content/dam/amd/en/images/backgrounds/products/2022616-gaming-ryzen-radeon-banner.jpg',
        },
        {
            img: 'https://dlcdnwebimgs.asus.com/gain/6D909D0C-142A-4100-AFE2-93948C7F442A/fwebp',
        },
        {
            img: 'https://redragon.co.za/wp-content/uploads/2021/09/Article_Banner_Redragon.jpg',
        },
        {
            img: 'https://danielhsepulveda.com/wp-content/uploads/2023/09/coleccion-heroes-y-villanos-banner-3.jpg',
        },
        {
            img: 'https://cloudcitygames.com/wp-content/uploads/Content/Product-Banners/funko-pop-banner.png',
        },
    ];

    const shadowCarousel = useColorModeValue('-6px -6px 19px #b3b3b3, 6px 6px 19px #ffffff', '-5px -5px 10px #11151d, 5px 5px 10px #232b3b');
    const bgCarousel = useColorModeValue('linear-gradient(315deg, #cacaca, #f0f0f0)', '#1A202C');
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const slidesCount = slides.length;
    const carouselStyle = {
        transition: 'all .5s',
        ml: `-${currentSlide * 100}%`,
    };

    const SLIDES_INTERVAL_TIME = 3000;
    const ANIMATION_DIRECTION = 'right';

    React.useEffect(() => {

        const prevSlide = () => {
            setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
        };

        const nextSlide = () => {
            setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
        };

        const automatedSlide = setInterval(() => {
            ANIMATION_DIRECTION.toLowerCase() === 'left' ? prevSlide() : nextSlide();
        }, SLIDES_INTERVAL_TIME);

        return () => clearInterval(automatedSlide);
    }, [slidesCount]);


    return (
        <Flex
            w={'90%'}
            h={{ base: '30vh', sm: '38vh', md: '45vh', lg: '56vh', xl: '60vh' }}
            mx={'auto'}
            my={'3rem'}
            px={'2rem'}
            pb={'2rem'}
            bg={bgCarousel}
            flexDir={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            boxShadow={shadowCarousel}
            borderRadius={'20px'}
        >
            <Heading
                w={'100%'}
                m={'1rem'}
                p={'1rem'}
                textAlign={'center'}
                color={'gray.600'}
                borderRadius={'20px'}
                boxShadow={shadowCarousel}
            >
                Novedades.
            </Heading>
            <Flex
                w={'full'}
                overflow={'hidden'}
                boxShadow={shadowCarousel}
                borderRadius={'20px'}
            >
                <Flex
                    pos={'relative'}
                    h={{ base: '17vh', sm: '26vh', md: '33vh', lg: '40vh', xl: '50vh' }}
                    w={'full'}
                    {...carouselStyle}
                >
                    {slides.map((slide, sid) => (
                        <Box
                            key={`slide-${sid}`}
                            flex='none'
                            boxSize={'full'}
                        >
                            <Text
                                color={'white'}
                                fontSize={'xs'}
                                p={'8px 12px'}
                                pos={'absolute'}
                                top={'0'}
                                whiteSpace={'nowrap'}
                            >
                                {sid + 1} / {slidesCount}
                            </Text>
                            <Image
                                src={slide.img}
                                alt={'carousel image'}
                                boxSize={'full'}
                                backgroundSize={'cover'}
                            />
                        </Box>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
};